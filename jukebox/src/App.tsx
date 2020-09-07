import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/navbar"
import Home from "./components/home"
import Songs from "./components/songs"

function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="main">
        <Home />
        <Songs />
      </div>
    </div>
  );
}

export default App;
