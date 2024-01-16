import logo from './logo_img.png';
import React from 'react';
import './App.css';
import './UnderConstruction.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <div className="bg-soft-green p-8">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="text-3xl font-bold text-coral">Patty's Pet Care</h1>
        </div>
      </header> */}
      <div>
        <div className="header">
          <img src={logo} alt="Patty's Pet Care Logo" className="logo" />
        </div>
        <div className="container">
          <h1 className="under-construction">Em construção</h1>
          <p>Novidades brevemente</p>
        </div>
      </div>
    </div>
  );
}

export default App;
