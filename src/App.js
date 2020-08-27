import React from 'react';
import './App.css';
import Header from './Components/Header.js/Header';
import Basic from './Components/Basic/Basic';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <Basic></Basic>
      </header>
    </div>
  );
}

export default App;
