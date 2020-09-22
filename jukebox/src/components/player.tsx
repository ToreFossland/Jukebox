import React, {useState, useContext, useEffect} from 'react';
import ReactDOM from 'react-dom';
import '../resources/styling/layout.css';
import {Context} from '../Context'

//currentTrackID from parent
/*interface myProps {
  currentTrackID: number
}

interface myState {
  progress: number,
  duration: string,
  currentTime: string,
  myAudio: HTMLAudioElement,
  playBtn: string,
}
*/

const Player = () => {
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState("0:00")
  const [currentTime, setCurrentTime] = useState("0:00")
  const [myAudio, setMyAudio] = useState(new Audio())
  const [playBtn, setPlayBtn] = useState("play")
  const [oldCurrentTrackID, setOldCurrentTrackID] = useState(0)
  let {currentTrackIDObject} = useContext(Context)!

//Når player mountes vil denne funksjonen kjøres hvert sekund frem til player unmountes
const progressBar = () =>{
  var duration = myAudio.duration
  var currentTime = myAudio.currentTime;
  var progress = (currentTime/duration) * 100


  localStorage.setItem('currentTime', JSON.stringify(myAudio.currentTime));

  if(!duration){duration = 0;}
  if(!currentTime){currentTime = 0;}
  if(isNaN(progress)){progress = 0;}
  
  if(myAudio.paused){
    setPlayBtn("play")
  }else{
    setPlayBtn("pause")
  }
    setDuration(convertSecondsToMinutesAndSeconds(duration))
    setCurrentTime(convertSecondsToMinutesAndSeconds(currentTime))
    setProgress(progress)
 }

 useEffect(() => {
  let ct = localStorage.getItem("currentTime")
  console.log(currentTime)


  if(currentTime != null ) {
    myAudio.currentTime = parseInt(currentTime);
  }

  const interval = setInterval(() => {
    progressBar()
  }, 200);
  return () => clearInterval(interval);
}, []);


 /* const componentWillUnmount = () => {
    clearInterval(intervalID);
  }*/

      if((currentTrackIDObject?.currentTrackID !== oldCurrentTrackID)){
        setOldCurrentTrackID(currentTrackIDObject?.currentTrackID as number)
        console.log("new prop from parent!")
<<<<<<< HEAD
        myAudio.pause()
        myAudio.src = require("../resources/media/audio/"+currentTrackIDObject?.currentTrackID+".mp3")
        myAudio.play();
=======
        this.state.myAudio.pause()
        this.state.myAudio.src = require("../resources/media/audio/"+nesteProps.valueFromParent+".mp3")
        this.state.myAudio.play();
>>>>>>> 82252b919b5913f7edfc293f5406293e795cc4f7

      }
  
  const handlePlayer = ()=>{
    if(myAudio.paused){
      myAudio.play();
    }else{
      myAudio.pause();
    }
  }

  const convertSecondsToMinutesAndSeconds = (seconds:number)=>{
    var minutes = Math.floor(seconds/60);
    var seconds = Math.floor(seconds - minutes * 60);
    var tenths = ""
    if(seconds<=10){tenths = "0";}
    return(minutes + ":"+tenths+seconds)
  }




//Denne må fikses slik at det ikke oppstår bugs når spilleren starter før en sang er staret
  const handleProgressBarClick = (e:any)=>{
 /*  var width = e.target.getBoundingClientRect().width;
   var offsetX = e.nativeEvent.offsetX
   var duration = this.state.myAudio.duration
   this.state.myAudio.currentTime = offsetX/width*duration*/
   
   myAudio.currentTime = e.target.value/100 * myAudio.duration
  }

      return(
        <div id="player">
        <div className="playerElements">
            <button className="playerBtns" onClick={handlePlayer}><img id="playbutton" src={require("../resources/media/" + `${playBtn}` + ".svg")}></img></button>
            <div className="playerTime"><p>{currentTime}</p></div>
            <div className="progressBar">
              <input className="invisibleSlider" type="range" min="0" max="100" onClick={handleProgressBarClick}></input>
              <div className="progressDot" style={{ marginLeft: `${progress - 1}%`}}></div> 
              <div id="progressLineBackground"><div id="progressLine" style={{ width: `${progress}%` }}></div></div>
            </div>
            <div className="playerTime"><p>{duration}</p></div>
        </div>
        </div>
      )
}

export default Player;


              