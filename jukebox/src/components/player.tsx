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

}

class Player extends React.Component<myProps, myState> {
  constructor(props: any) {
    super(props);
    this.state = {
      progress: 0,
      duration: "0:00",
      currentTime: "0:00",
      myAudio: new Audio()
    };
    this.handlePlayer = this.handlePlayer.bind(this);
    this.progressBar = this.progressBar.bind(this);

    
  }
  intervalID = 0;

  componentDidMount(){
    this.intervalID =window.setInterval(this.progressBar, 1000);
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
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  
  handlePlayer(){
    if(this.state.myAudio.paused){
      this.state.myAudio.play();      
    }else{
      this.state.myAudio.pause(); 
    }
  }


//Når player mountes vil denne funksjonen kjøres hvert sekund frem til player unmountes
 progressBar(){
  var duration = this.state.myAudio.duration
  if(!duration){duration = 0;}
  
  var minutes = Math.round(duration/60);
  var seconds = Math.round(duration%60);
  var tenths = ""
  if(seconds<10){tenths = "0";}
  this.setState({ duration: minutes + ":"+tenths+seconds}); //sets the duration value in the progress bar
  
  var currentTime = this.state.myAudio.currentTime;
  
  var minutes2 = Math.round(currentTime/60);
  var seconds2 = Math.round(currentTime%60);
  var tenths2 = ""
  if(seconds2<10){tenths2 = "0";}
  this.setState(() => {
      return {
        progress: (currentTime/duration) * 100,
        currentTime: minutes2 + ":"+ tenths2 + seconds2
      }
    });

  }


  render(){
      return(
        <div id="player">
        <div className="navelements2">
            <button className="navButtons2" onClick={this.handlePlayer}><img id="playbutton" src={require("../resources/media/play.svg")}></img></button>
            <p>{this.state.currentTime}</p>
            <div className="progressbar">
              <div className="progress" style={{ width: `${this.state.progress}%` }}>
              </div>
            </div>
            <p>{this.state.duration}</p>
        </div>
        </div>
      )
  }
}

export default Player;
