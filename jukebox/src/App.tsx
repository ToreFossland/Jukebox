import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/navbar"
import Home from "./components/home"
import Songs from "./components/songs"
import Player from "./components/player"


function App() {
  return (
    <div>
      <NavBar />
      <Home/>
      <Player source="singThemeSong"/>
    </div>
  );
}

export default App;
