import './App.css';
import Main from './components/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Task Management App, Hi</h1>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path='/' default/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
