import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import PostList from './components/PostList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className='main'>
          <PostList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
