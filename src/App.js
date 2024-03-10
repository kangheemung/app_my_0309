import React, { useState, useEffect } from 'react';
import './App.css';
import useCalled from './UseCalled'; // Correctly import the hook
import MyComponents from './MyComponents';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://api.example.com/data');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
    fetchData();
  }, []);

  const callCount = useCalled();

  return (
    <div className="App">
      <MyComponents />
      <p>The App component has been called {callCount} times.</p>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

export default App;
