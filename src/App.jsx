import React, { useState } from 'react'
import './App.css'
import { getData } from './controller';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  const onClick = async () => {
    setError('');

    const res = await getData();

    if (res?.error) {
      setError(res.error);
    }

    setData(res);
  }

  return (
    <div className="card">
      {
        error && <div className="error">{error}</div>
      }

      <p>
        Today's activity is: {data && data.activity}
      </p>

      <p>
        This activity is for type : {data && data.type}
      </p>

      {
        data && data.participants &&
        <p>
          Participant's are : {data.participants}
        </p>
      }

      <button onClick={onClick}>
        Request Activity
      </button>
    </div>
  )
}

export default App
