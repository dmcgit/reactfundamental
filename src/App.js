import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Component/Greet'
import Welcome from './Component/Welcome'
import Hello from './Component/Hello'
import Message from './Component/Message'
import Counter from './Component/Counter'

function App() {
  return (
    <div className="App">
     {/* <Greet name = 'A' age = '10'>This is a children</Greet>
     <Greet name = 'B' age = '12'><button>Enter</button></Greet>
     <Greet name = 'C' age = '15'></Greet>
     <Welcome name = 'You'/> */}
     {/* <Hello/> */}
     <Counter/>
     <Message/>
    </div>
  );
}

export default App;
