import './App.css';
import Main from './components/Main';
import { Provider } from 'react-redux';
import { store } from './state/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className='top'>
          <h1>My New React App</h1>
        </div>
        <Main></Main>
      </div>
    </Provider>
    
  );
}

export default App;
