import React, {} from 'react';
import './resources/styling/layout.css';
import './App.css';
import NavBar from "./components/navbar";
import Home from "./components/home";
import Info from "./components/info";
import Footer from "./components/footer";
import Player from "./components/player";
import Dancers from "./components/dancers";
import {Provider} from './context'

interface myState {
  trackID: number,
  btheme: string,
  ctheme: string,
  bodyTheme: string,
  dancerIndex: number
}

interface myProps {
//fill in props here
}

class App extends React.Component<myProps, myState> {
  constructor(props:any){
    super(props);
    this.state = {
        trackID: 0,
        btheme: "#fff",
        bodyTheme: "#eee",
        ctheme: "#333",
        dancerIndex: 0
    }
    this.changeTheme = this.changeTheme.bind(this);
    this.changeDancer = this.changeDancer.bind(this);
}

  componentDidMount() {
    let btheme = localStorage.getItem('btheme');
    let ctheme = localStorage.getItem('ctheme');
    let bodyTheme = localStorage.getItem('bodyTheme');
    if(btheme != null) {
      this.setState({btheme: btheme});
    }

    if(ctheme != null) {
      this.setState({ctheme: ctheme});
    }

    if(bodyTheme != null) {
      this.setState({bodyTheme: bodyTheme});
    }

    let dancerIndex = sessionStorage.getItem('dancerIndex');

    if(dancerIndex != null) {
      this.setState({dancerIndex: parseInt(dancerIndex)});
    }

  }
  changeTheme() {
    const newbTheme = this.state.btheme == "#fff" ? "#555" : "#fff";
    const newcTheme = this.state.ctheme == "#333" ? "#eee" : "#333";
    const newBodyTheme = this.state.bodyTheme == "#111" ? "#eee" : "#111";
    this.setState({ctheme: newcTheme});
    this.setState({bodyTheme: newBodyTheme});
    this.setState({btheme: newbTheme});
    localStorage.setItem('btheme', newbTheme);
    localStorage.setItem('ctheme', newcTheme);
    localStorage.setItem('bodyTheme', newBodyTheme);
  }

  changeDancer(index: number) {
    this.setState({dancerIndex: index})
    sessionStorage.setItem('dancerIndex', JSON.stringify(index));
  }


  render(){
    return(
      <Provider>
        <div className="App" style={{background: this.state.bodyTheme}}>
          <NavBar/>
          <div id="main">
            <Home dancerIndex={this.state.dancerIndex} bordertheme={this.state.bodyTheme}  btheme={this.state.btheme} ctheme={this.state.ctheme}/>
            <Dancers btheme={this.state.btheme} bordertheme={this.state.bodyTheme} ctheme={this.state.ctheme} onChange={this.changeDancer} />
            <Info btheme={this.state.btheme} ctheme={this.state.ctheme}/>
          </div>
          <Footer onChange={this.changeTheme}/>
          <Player/>
        </div>
      </Provider>
      

    );
  }
}


export default App;
