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
  myAudio: HTMLAudioElement,
  playBtn: string,
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
    var currentTime = localStorage.getItem("currentTime");
    console.log(currentTime)
    
    if(currentTime != null ) {
      this.state.myAudio.currentTime = parseInt(currentTime);
    }
    
    this.intervalID =window.setInterval(this.progressBar, 200);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  componentWillUpdate(nesteProps:any){ //nextprops inneholder de nye. this.props er de gamle
      if((this.props.valueFromParent !== nesteProps.valueFromParent)){
        console.log("new prop from parent!")
        this.state.myAudio.pause()
        this.state.myAudio.src = require("../resources/media/"+nesteProps.valueFromParent+".mp3")
        this.state.myAudio.play();

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
    var minutes = Math.floor(seconds/60);
    var seconds = Math.floor(seconds - minutes * 60);
    var tenths = ""
    if(seconds<=10){tenths = "0";}
    return(minutes + ":"+tenths+seconds)
  }

//Når player mountes vil denne funksjonen kjøres hvert sekund frem til player unmountes
  progressBar(){
    console.log("progess bar updates")
    var duration = this.state.myAudio.duration
    var currentTime = this.state.myAudio.currentTime;
    var progress = (currentTime/duration) * 100


    localStorage.setItem('currentTime', JSON.stringify(this.state.myAudio.currentTime));

    if(!duration){duration = 0;}
    if(!currentTime){currentTime = 0;}
    if(isNaN(progress)){progress = 0;}
    
    if(this.state.myAudio.paused){
      this.setState({playBtn: "play"})
    }else{
      this.setState({playBtn: "pause"})
    }
    this.setState({
          duration: this.convertSecondsToMinutesAndSeconds(duration),
          currentTime: this.convertSecondsToMinutesAndSeconds(currentTime),
          progress: progress
    })
  }


//Denne må fikses slik at det ikke oppstår bugs når spilleren starter før en sang er staret
  handleProgressBarClick(e:any){
 /*  var width = e.target.getBoundingClientRect().width;
   var offsetX = e.nativeEvent.offsetX
   var duration = this.state.myAudio.duration
   this.state.myAudio.currentTime = offsetX/width*duration*/
   
   var duration = this.state.myAudio.duration
   this.state.myAudio.currentTime = e.target.value/100 * duration
  }

  render(){
      return(
        <div id="player">
        <div className="playerElements">
            <button className="playerBtns" onClick={this.handlePlayer}><img id="playbutton" src={require("../resources/media/" + `${this.state.playBtn}` + ".svg")}></img></button>
            <div className="playerTime"><p>{this.state.currentTime}</p></div>
            <div className="progressBar">
              <input className="invisibleSlider" type="range" min="0" max="100" onClick={this.handleProgressBarClick.bind(this)}></input>
              <div className="progressDot" style={{ marginLeft: `${this.state.progress - 1}%`}}></div> 
              <div id="progressLineBackground"><div id="progressLine" style={{ width: `${this.state.progress}%` }}></div></div>
            </div>   
            <div className="playerTime"><p>{this.state.duration}</p></div>
        </div>
        </div>
      )
  }
}

export default Player;


              