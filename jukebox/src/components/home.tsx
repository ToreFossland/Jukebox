import React, {useContext} from 'react';
import '../resources/styling/layout.css';
import {Context} from '../context';
import Songs from "./songs";
import Dancer1 from './dancers/dancer1';
import Dancer2 from './dancers/dancer2';
import Dancer3 from './dancers/dancer3';
import Dancer4 from './dancers/dancer4';
import Dancer5 from './dancers/dancer5';
import Dancer6 from './dancers/dancer6';

const Home = ({...props}) => {

  let {trackList, currentTrackIDObject, currentTrackNameObject, currentTrackAlbumObject, currentTrackArtistObject} = useContext(Context)!
      console.log(currentTrackIDObject?.currentTrackID)
      console.log(trackList)

  
  const alldancers = [<Dancer1/>, <Dancer2/>, <Dancer3/>, <Dancer4/>, <Dancer5/>, <Dancer6/>];


const renderFunction = ()=>{
  if(currentTrackIDObject?.currentTrackID===0){
  return(
    <div id="homedefault">
      <h1>Welcome to JukeBox</h1>
      <p> Here we have a wide selection of songs available for karaoke usage. Click "Songs" in the menu or scroll down to begin!</p>
    </div>
  );
  }


  
  return(
      <div id="currentHomeData">
        <div id="currentInfo">
          <h2> Current Song:</h2>
          <p>{currentTrackNameObject?.currentTrackName}  - {currentTrackArtistObject?.currentTrackArtist}</p>
          <p>- {currentTrackAlbumObject?.currentTrackAlbum}</p>
        </div>
        <img alt="Current Cover" id="currentCover" src={require("../resources/media/img/"+currentTrackIDObject?.currentTrackID+".jpg")}></img>
      </div>
  );}

    return(
      <div id="container3" style={{background: props.btheme, color: props.ctheme}}>
          <svg id="svgBackground">
            <defs>
              <linearGradient id="gradient-0" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#DB3A32"stopOpacity="1" />
                <stop offset="50%" stopColor="#FAD500"stopOpacity="1" />
                <stop offset="100%" stopColor="#FAD500" stopOpacity="0" /> />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#gradient-0)"/>
          </svg>

          {alldancers[props.dancerIndex]}

          <div id="homemain">
            {renderFunction()}
            <Songs/>
          </div>
      </div>

    )
  }
  export default Home;