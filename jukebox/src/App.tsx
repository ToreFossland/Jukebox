import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import NavBar from "./components/navbar"
import Index from "./components/Index"
import Home from "./components/home"
import Songs from "./components/songs";
import Info from "./components/info";
import Footer from "./components/footer";
import Player from "./components/player";
// import Tracks from "./components/tracks/Tracks";
// import Lyrics from "./components/tracks/Lyrics";


import {Provider} from './context'

function App() {
  return (
      <Provider>
          <Router>
              <React.Fragment>
                  <div className="App">
                      <NavBar />
                      <div className="container">
                          <Switch>
                              <Route exact path= "/" component = {Index} />
                          </Switch>
                      </div>
                      <div id="main">
                          <Home />
                          <Songs />
                          <Info />
                          {/*<Tracks />*/}
                          {/*<Lyrics />*/}
                      </div>
                      <Footer />
                      <Player source="singThemeSong"/>
                  </div>
              </React.Fragment>
          </Router>
      </Provider>

  );
}

export default App;
