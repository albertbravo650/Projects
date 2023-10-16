import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [apiData, setApiData] = useState({});

  useEffect(() => {
    fetch('/api/data')
      .then((res) => res.json())
      .then((data) => setApiData(data))
      .catch((err) => console.error('Error fetching data:', err))
  }, []);

  return (
    <div className="App">
      <h1>API Data!!</h1>
      <p>{apiData.message}</p>
      <p>{apiData.message}</p>
      <p>{apiData.message}</p>
      <p>{apiData.message}</p>
      <p>{apiData.message}</p>
    </div>
  );
}

export default App;
