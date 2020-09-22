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


<<<<<<< HEAD
import {Provider} from './Context'
=======

import {Provider} from './context'
>>>>>>> 82252b919b5913f7edfc293f5406293e795cc4f7
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
<<<<<<< HEAD
          <NavBar/>
          <div id="main">
            <Home2 />
            <Songs />
            <Player />
            <Footer />
          </div>
=======
          <Router>
              <React.Fragment>
                  <div className="App">
                      <NavBar />
                      <div id="main">
                      
                          <Home2/>
                          <Songs functionCallFromParent={this.parentFunction.bind(this)}/>
                          <Info />
                          {/*<Tracks />*/}
                          {/*<Lyrics />*/}
                          <div className="container">
                            <Switch>
                                <Route exact path= "/" component = {Index} />
                            </Switch>
                          </div>
                      </div>
                      <div className="container">
                            <Switch>
                                <Route exact path= "/" component = {Index} />
                            </Switch>
                        </div>
                      <Footer />
                      <Player valueFromParent={this.state.trackID}/>
                  </div>
              </React.Fragment>
          </Router>
>>>>>>> 82252b919b5913f7edfc293f5406293e795cc4f7
      </Provider>
      

    );
  }
}


export default App;
