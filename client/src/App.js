import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="bg-soft-green p-8">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="text-3xl font-bold text-coral">Patty's Pet Care</h1>
        </div>
      </header>
    </div>
  );
}

export default App;
