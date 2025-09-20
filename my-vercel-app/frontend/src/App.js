import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('https://sample-vercel-app-kz3l.vercel.app/api/message
')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage('Failed to fetch'));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <h1>FastAPI + React on Vercel</h1>
      <p>Message from backend: {message}</p>
    </div>
  );
}

export default App;


