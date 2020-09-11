import React from 'react';
import ReactDOM from 'react-dom';
import '../resources/styling/layout.css';


class Player extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      playing: false,
      progress: 0,
      duration: "0:00",
      currentTime: "0:00"
    };
    this.handleClickPlay = this.handleClickPlay.bind(this);
    this.progressBar = this.progressBar.bind(this);
  }
  myAudio = new Audio(require("../resources/media/oneMoreTime.mp3"));
  intervalID = 0;


  handleClickPlay(){
    var duration = this.myAudio.duration;
    var minutes = Math.round(duration/60);
    var seconds = Math.round(duration%60);
    var tenths = ""
    if(seconds<10){
      tenths = "0";
    }
    
    var playbutton = document.getElementById("playbutton");
    

    this.setState({ duration: minutes + ":"+tenths+seconds}); //sets the duration value in the progress bar
    if(!this.state.playing){
      this.setState({ playing: true });
      this.myAudio.play();
      this.intervalID =window.setInterval(this.progressBar, 1000);
      
    }else{
      this.setState({ playing: false });
      this.myAudio.pause(); 
      clearInterval(this.intervalID);
    }
  }

 progressBar(){
  var currentTime = this.myAudio.currentTime;
  var duration = this.myAudio.duration;
  var minutes = Math.round(currentTime/60);
  var seconds = Math.round(currentTime%60);
  var tenths = ""
  if(seconds<10){
    tenths = "0";
  }
  this.setState(() => {
      return {
        progress: (currentTime/duration) * 100,
        currentTime: minutes  + ":"+ tenths + seconds
      }
    });

  }


  render(){
      return(
        <div id="player">
        <div className="navelements2">
            <button className="navButtons2" onClick={this.handleClickPlay}><img id="playbutton" src={require("../resources/media/play.svg")}></img></button>
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
