import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [response, setResponse] = useState();

  useEffect(() => {
    fetch('/.netlify/functions/test-api')
      .then(resp => resp.json())
      .then(json => setResponse(json));
  }, []);

  return (
    <div className="App">
      <pre>{JSON.stringify(response)}</pre>
    </div>
  );
}

export default App;
