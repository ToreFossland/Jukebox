import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import './resources/styling/layout.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import NavBar from "./components/navbar";
import Home from "./components/home";
import Home2 from "./components/home2";
import Songs from "./components/songs";
import Info from "./components/info";
import Footer from "./components/footer";
import Player from "./components/player";
import Tracks from "./components/tracks/Tracks";
import Lyrics from "./components/tracks/Lyrics";


import {Provider} from './Context'
import Index from './components/Index';

interface myState {
  currentTrackID: number
  currentTrackName: string,
  currentArtistName: string,
}
interface myProps {
//fill in props here
}

class App extends React.Component<myProps, myState> {
  
  constructor(props:any){
    super(props);
    this.state = {
      currentTrackID: 0,
      currentTrackName: "",
      currentArtistName: "",
    }
}



  render(){
    return(
      <Provider>
          <NavBar/>
          <div id="main">
            <Home2 />
            <Songs />
            <Player />
            <Footer />
          </div>
      </Provider>
      

    );
  }
}


export default App;
