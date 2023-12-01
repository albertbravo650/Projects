import './App.css';
import Main from './components/Main';
import Update from './components/Edit';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path='/' default/>
          <Route element={<Update />} path='/task/edit/:id' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
