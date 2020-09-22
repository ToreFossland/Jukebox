import React, {useContext, useState} from 'react';
import ReactDOM from 'react-dom';
import '../resources/styling/layout.css';
import {Context} from '../context';
import Dancer from './dancer';
import Dancer2 from './dancer2';
import Dancer3 from './dancer3';
import Dancer4 from './dancer4';
import Dancer5 from './dancer5';
import Dancer6 from './dancer6';

const Home = ({...props}) => {

  let {trackList, currentTrackIDObject, currentTrackNameObject, currentTrackAlbumObject, currentTrackArtistObject} = useContext(Context)!
      console.log(currentTrackIDObject?.currentTrackID)
      console.log(trackList)

const renderFunction = ()=>{
  if(currentTrackIDObject?.currentTrackID===0){
  return(
    <div id="homedefault" style={{background: props.btheme, color: props.ctheme}}>
      <h1>Welcome to JukeBox</h1>
      <p> Here we have a wide selection of songs available for karaoke usage. Click "Songs" in the menu or scroll down to begin!</p>
    </div>
  );
  }

  const alldancers = [<Dancer/>, <Dancer2/>, <Dancer3/>, <Dancer4/>, <Dancer5/>, <Dancer6/>];

  
  return(
    <div style={{background: props.btheme, color: props.ctheme}}>
      <svg id="svgCover">
        <defs>
          <linearGradient id="gradient-0" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#DB3A32"stopOpacity="1" />
            <stop offset="80%" stopColor="#FAD500"stopOpacity="1" />
            <stop offset="100%" stopColor={props.btheme} stopOpacity="0" />
            alldancers[props.dancerIndex];
          </linearGradient>
        </defs>
        <rect id="svgCoverRect" width="100%" height="100%" z="-10" fill="url(#gradient-0)"/>
        {alldancers[props.dancerIndex]}
      </svg>
      
      <div id="currentInfo">
        <h2> Current Song:</h2>
        <p id="currentSong">{currentTrackNameObject?.currentTrackName}</p>
        <p id="currentArtist">by {currentTrackArtistObject?.currentTrackArtist}</p>
      </div>
      <img id="currentCover" src={require("../resources/media/img/"+currentTrackIDObject?.currentTrackID+".jpg")}></img>
      
    </div>
  );}

    return(
      <>
    {renderFunction()}
    </>
    )

  }
  export default Home;