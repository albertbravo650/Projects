import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions/postActions';
import RefreshButton from './RefreshButton';
import './PostList.css';

const PostList = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.posts);
    const loading = useSelector((state) => state.posts.loading);
    const error = useSelector((state) => state.posts.error);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>Posts</h1>
            <RefreshButton />
            <ul>
                {posts.map((post) => (
                    <div className='post'>
                        <li className='postTitle' key={post.id}>{post.title}</li>
                        <li className='postBody' >{post.body}</li>
                    </div>
                ))}
            </ul>
        </div>
    );
};

// const mapStateToProps = (state) => ({
//     posts: state.posts.posts,
// });

// export default connect(mapStateToProps, { fetchPosts })(PostList);

export default PostList;
