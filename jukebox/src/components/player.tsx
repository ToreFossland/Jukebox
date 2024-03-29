import React, {useState, useContext, useEffect} from 'react';
import '../resources/styling/layout.css';
import {Context} from '../context'



const Player = () => {
  //Henter globale variabler fra Context og setter opp lokale variabler for player.
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState("0:00")
  const [currentTime, setCurrentTime] = useState("0:00")
  const [myAudio] = useState(new Audio())
  const [playBtn, setPlayBtn] = useState("play")
  const [oldCurrentTrackID, setOldCurrentTrackID] = useState(0)
  let {currentTrackIDObject, currentTrackNameObject, currentTrackArtistObject} = useContext(Context)!

//Oppdaterer alle variablene som brukes for å tegne opp progresjonsbaren i player. 
//Altså den blå streken og tiden
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
//Kjører en gang og gjør at progress bar kjører med et intervall på 200ms.
//Setter currenTime dersom den har funnet noe i localStorage.
 useEffect(() => {
  if(currentTime != null ) {
    myAudio.currentTime = parseInt(currentTime);
  }

  const interval = setInterval(() => {
    progressBar()
  }, 200);
  return () => clearInterval(interval);
}, []);

const delay = (ms: number) => {
  return new Promise( resolve => setTimeout(resolve, ms) );
}
//En async funkjon som henter currentID og bruker denne til å sette sette sourcen til audioObjektet.
//KJøres hver gang currentID endres. I gui vil dette bety at den kjøres når du klikker på en sang i home komponenten.
useEffect(() => {
  (async () => { 
    if((currentTrackIDObject?.currentTrackID !== oldCurrentTrackID)){
      console.log("new Audio file starting!")
      myAudio.pause()
      myAudio.src = require("../resources/media/audio/"+currentTrackIDObject?.currentTrackID+".mp3")
      while(myAudio.readyState!==4){
        await delay(100);
      }
      if(oldCurrentTrackID!==0){
        myAudio.play();
      }else{
        let ct = localStorage.getItem("currentTime")
        console.log(ct)
        if(ct){myAudio.currentTime = parseInt(ct);}
      }
      setOldCurrentTrackID(currentTrackIDObject?.currentTrackID as number)
    }
    })();
}, [currentTrackIDObject?.currentTrackID]);


//Pauser/Starter sangen. Kjøres når du klikker på playbutton.
const handlePlayer = ()=>{
  if(myAudio.paused){
    myAudio.play();
  }else{
    myAudio.pause();
  }
}

//hjelpemetode for å formatere sekunder til minutter og sekunder.
//returnerer som string.
  const convertSecondsToMinutesAndSeconds = (seconds:number)=>{
    var minutes = Math.floor(seconds/60);
    var seconds = Math.floor(seconds - minutes * 60);
    var tenths = ""
    if(seconds<=10){tenths = "0";}
    return(minutes + ":"+tenths+seconds)
  }



//Dersom audioobjektet er klar til å spille av lyd vil denne sette currentTime til angitt tid.
//Tiden sendes ved hjelp av en slider som returnerer en verdi.
  const handleProgressBarClick = (e:any)=>{
    if(myAudio.readyState===4){
      myAudio.currentTime = e.target.value/100 * myAudio.duration
    }
  }

      return(
        <div id="player">
        <div className="playerElements">
            <button className="playerBtns" onClick={handlePlayer}><img alt="Play Button" id="playbutton" src={require("../resources/media/" + `${playBtn}` + ".svg")}></img></button>
            <div className="playerTime"><p>{currentTime}</p></div>
            <div className="progressBar">
              <input className="invisibleSlider" type="range" min="0" max="100" onClick={handleProgressBarClick}></input>
              <div className="progressDot" style={{ marginLeft: `${progress - 1}%`}}></div>
              <div id="progressLineBackground"><div id="progressLine" style={{ width: `${progress}%` }}></div>
              </div>
            </div>
            <div className="playerTime"><p>{duration}</p></div>
            
            <div className="playerSongImg" style={{ backgroundImage: `url(${require("../resources/media/img/"+ currentTrackIDObject?.currentTrackID +".jpg")})` }} ></div>
            <div className="playerSongData">
              <p id="playerTrackName">{currentTrackNameObject?.currentTrackName}</p>
              <p id="playerTrackAlbum">{currentTrackArtistObject?.currentTrackArtist}</p>
            </div>
        </div>
        </div>
      )
}

export default Player;


              