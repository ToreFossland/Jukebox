import React, {useContext, useState} from 'react';
import ReactDOM from 'react-dom';
import '../resources/styling/layout.css';
import {Context} from '../context';
import Dancer from '../components/dancer';
import Dancer2 from '../components/dancer2';
import Dancer3 from '../components/dancer3';
import Dancer4 from '../components/dancer4';
import Dancer5 from '../components/dancer5';
import Dancer6 from '../components/dancer6';
import Lyrics from '../components/tracks/Lyrics'


const Home2 = () => {

  let {currentTrackIDObject, trackList} = useContext(Context)!
      console.log(currentTrackIDObject?.currentTrackID)
      console.log(trackList)

const renderFunction = ()=>{
  if(currentTrackIDObject?.currentTrackID===0){
  return(
    <div id="homemain">
      <h1>Welcome to JukeBox</h1>
      <p> Here we have a wide selection of songs available for karaoke usage. Click "Songs" in the menu or scroll down to begin!</p>
    </div>
  );
  }

  return(
    <div id="homemain2">
      <svg id="svgCover">
        <defs>
          <linearGradient id="gradient-0" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#DB3A32"stopOpacity="1" />
            <stop offset="80%" stopColor="#FAD500"stopOpacity="1" />
            <stop offset="100%" stopColor="white"stopOpacity="0" />

          </linearGradient>
        </defs>
        <rect id="svgCoverRect" width="100%" height="100%" z="-10" fill="url(#gradient-0)"/>
        <Dancer3 />
      </svg>

      <div id="currentInfo">
        <h2> Current Song:</h2>
        <p id="currentSong">One More Time</p>
        <p id="currentArtist">by Daft Punk</p>
      </div>
      <img id="currentCover" src={require("../resources/media/img/" + currentTrackIDObject?.currentTrackID + ".jpg")}/>
    </div>
  );}

    return(
      <>
    {renderFunction()}
    </>
    )

  }
  export default Home2;