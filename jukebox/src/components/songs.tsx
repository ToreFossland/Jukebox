import React, {useContext} from 'react';
import ReactDOMs from 'react-dom';
import {Context} from '../Context';
import '../resources/styling/layout.css';


const Songs = () =>{
  let {trackList, currentTrackIDObject} = useContext(Context)!
  
//Henter tittel, artist, bilde og legger enn en onclick som sender trackID childFunction. 
//Legger til bilde som bakgrunn fordi dette gjorde det lett å skalere bilde riktig i css.
  const populateSongList = () =>{
    let container:any = [];
    trackList?.forEach((element: { trackID:React.ReactNode; name: React.ReactNode; artist: React.ReactNode; }) => {
      container.push(
        <div className="songLink" key={element.trackID as number} onClick={() => currentTrackIDObject?.setCurrentTrackID(element.trackID)}>
          <div className="songLinkImg" style={{ backgroundImage: `url(${require("../resources/media/img/"+ element.trackID +".jpg")})` }} ></div>
          <p>{element.artist} - {element.name}</p>
        </div>
      )
    });
    return container;
  }

  


  return(
      <div id="songmain">
          <h1>Songs</h1>
          <p>Here is our library of available songs.</p>
          <div className="songlist">
            {populateSongList()}
          </div>
      </div>
    )
  }

  export default Songs;