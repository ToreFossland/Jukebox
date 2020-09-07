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
      <Songs />
      <Player />
    </div>
  );
}

export default App;
