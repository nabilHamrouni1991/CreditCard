import React from 'react';
import './App.css';
import creditCard from './Assest/Card.png';
import Card from './Card';


function App() {
  return (
    <div className="App">
      <img className="pic" src={creditCard} alt="..."/>
      <Card/>
    </div>
  );
}

export default App;
