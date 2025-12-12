import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [input,setInput]=useState("")
  const [data,setData]=useState("")
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>khushbu</h1>
      </header>
      <input type='text' placeholder='Enter name' id="name" name="name"
      onChange={(e)=>setInput(e.target.value)} value={input}/>
      {input}
      <button onClick={()=>setData("Hello")}>say Hello</button>
      <h2>{data}</h2>
    </div>
  );
}

export default App;
