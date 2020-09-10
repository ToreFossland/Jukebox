import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/navbar";
import Home from "./components/home";
import Home2 from "./components/home2";
import Songs from "./components/songs";
import Info from "./components/info";
import Footer from "./components/footer";
import Player from "./components/player";

function App() {
  return (
    <div>
      <NavBar />
      <div id="main">
        <Home2 />
        <Songs />
        <Info />
      </div>
      <Footer />
      <Player />
    </div>
  );
}

export default App;
