// components/RefreshButton.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/actions/postActions';

const RefreshButton = () => {
    const dispatch = useDispatch();

    const handleRefreshClick = () => {
    dispatch(fetchPosts());
    };

    return (
    <button onClick={handleRefreshClick}>Refresh</button>
    );
};

export default RefreshButton;
