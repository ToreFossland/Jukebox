import React from 'react';
import ReactDOM from 'react-dom';
import '../resources/styling/layout.css';

interface myProps {
  source?: string,
  valueFromParent: string
}

interface myState {
  progress: number,
  duration: string,
  currentTime: string,
  myAudio: HTMLAudioElement
  playBtn: string
}

class Player extends React.Component<myProps, myState> {
  constructor(props: any) {
    super(props);
    this.state = {
      progress: 0,
      duration: "0:00",
      currentTime: "0:00",
      myAudio: new Audio(),
      playBtn: "play"
    };
    this.handlePlayer = this.handlePlayer.bind(this);
    this.progressBar = this.progressBar.bind(this);

    
  }
  intervalID = 0;

  componentDidMount(){
    this.intervalID =window.setInterval(this.progressBar, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  componentWillUpdate(nesteProps:any){ //nextprops inneholder de nye. this.props er de gamle
      if((this.props.valueFromParent !== nesteProps.valueFromParent)){
        console.log("new prop from parent!")
        this.state.myAudio.pause()
        this.state.myAudio.src = require("../resources/media/"+nesteProps.valueFromParent+".mp3")
        this.state.myAudio.play()
      }
      return true; 
  }
  
  handlePlayer(){
    if(this.state.myAudio.paused){
      this.state.myAudio.play();
    }else{
      this.state.myAudio.pause();
    }
  }

  convertSecondsToMinutesAndSeconds(seconds:number){
    var minutes = Math.round(seconds/60);
    var seconds = Math.round(seconds%60);
    var tenths = ""
    if(seconds<10){tenths = "0";}
    return(minutes + ":"+tenths+seconds)
  }

//Når player mountes vil denne funksjonen kjøres hvert sekund frem til player unmountes
 progressBar(){
  console.log("progess bar updates")
  var duration = this.state.myAudio.duration
  var currentTime = this.state.myAudio.currentTime;
  if(this.state.myAudio.paused){
    this.setState({playBtn: "play"})
  }else{
    this.setState({playBtn: "pause"})
  }
  
  if(!duration){duration = 0;}
  this.setState({ duration: this.convertSecondsToMinutesAndSeconds(duration)}); //sets the duration value in the progress bar
  
  this.setState(() => {
      return {
        progress: (currentTime/duration) * 100,
        currentTime: this.convertSecondsToMinutesAndSeconds(currentTime)
      }
    });
  }

  render(){
      return(
        <div id="player">
        <div className="playerElements">
            <button className="playerBtns" onClick={this.handlePlayer}><img id="playbutton" src={require("../resources/media/" + `${this.state.playBtn}` + ".svg")}></img></button>
            <div className="playerTime"><p>{this.state.currentTime}</p></div>
            <div className="progressBar">
              <div id="progressDot" style={{ marginLeft: `${this.state.progress - 1}%`}}></div> 
              <div id="progressLineBackground"><div id="progressLine" style={{ width: `${this.state.progress}%` }}></div></div>
            </div>   
            <div className="playerTime"><p>{this.state.duration}</p></div>
        </div>
        </div>
      )
  }
}

export default Player;
