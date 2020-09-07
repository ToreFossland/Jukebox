import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/navbar"
import Home from "./components/home"
import Songs from "./components/songs"
import Player from "./components/player"

function App() {
  return (
    <div className="App">
      <NavBar />
<<<<<<< HEAD
      <Songs />
      <Player />
=======
      <div id="main">
        <Home />
        <Songs />
      </div>
>>>>>>> ce276e06bce0c715e1131430b6a260df7672ddc1
    </div>
  );
}

export default App;
