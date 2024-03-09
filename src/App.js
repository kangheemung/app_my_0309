import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect=(() => {
    async function fetchData() {
      try{
        const response =await fetch('https://api.example.com/data')
        const json = await response.json();
        setData(json);
      } catch (error) {
          console.error("Error fetching data: ", error);
      }
    }
        fetchData();
    }, []);
  return (
    <div className="App">
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

export default App;
