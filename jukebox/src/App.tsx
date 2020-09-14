import React from 'react';
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
// import Tracks from "./components/tracks/Tracks";
// import Lyrics from "./components/tracks/Lyrics";


import {Provider} from './context'
import Index from './components/Index';

interface myState {
  songID: string
}
interface myProps {
//fill in props here
}

class App extends React.Component<myProps, myState> {
  
  constructor(props:any){
    super(props);
    this.state = {
        songID: ""
    }
    this.parentFunction = this.parentFunction.bind(this);
}
parentFunction=(data_from_child:string)=>{
    this.setState({songID:data_from_child});
}


  render(){
    return(
      <Provider>
          <Router>
              <React.Fragment>
                  <div className="App">
                      <NavBar />
                      <div id="main">
                        <div className="container">
                            <Switch>
                                <Route exact path= "/" component = {Index} />
                            </Switch>
                        </div>
                        <Home2/>
                        <Songs functionCallFromParent={this.parentFunction.bind(this)}/>
                        <Info />
                        {/*<Tracks />*/}
                        {/*<Lyrics />*/}
                      </div>
                      <Footer />
                      <Player valueFromParent={this.state.songID}/>
                  </div>
              </React.Fragment>
          </Router>
      </Provider>

    );
  }
}


export default App;
