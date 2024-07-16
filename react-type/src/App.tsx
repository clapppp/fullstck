import { useState } from 'react';
import './App.css';

function App() {

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  return (
    <div className={`flex flex-col`}>
      <div className={`flex flex-col`}>
        <input type='text' placeholder='ID' onChange={(e) => setId(e.target.value)}></input>
        <input type='text' placeholder='PW' onChange={(e) => setPw(e.target.value)}></input>
      </div>
      <div>{`${id} , ${pw}`}</div>
    </div>
  );
}

export default App;
