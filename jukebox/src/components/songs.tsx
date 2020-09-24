import React, {useContext, useEffect} from 'react';
import ReactDOMs from 'react-dom';
import {Context} from '../context';
import '../resources/styling/layout.css';


const Songs = () =>{


  let {trackList, currentTrackIDObject, currentTrackNameObject, currentTrackAlbumObject, currentTrackArtistObject} = useContext(Context)!
  
  useEffect(() => {
    let currentTrackID = localStorage.getItem("currentTrackID")
    let currentTrackName = localStorage.getItem("currentTrackName")
    let currentTrackAlbum = localStorage.getItem("currentTrackAlbum")
    let currentTrackArtist = localStorage.getItem("currentTrackArtist")
    if(currentTrackID && currentTrackName && currentTrackAlbum && currentTrackArtist){
      setCurrentSongData(parseInt(currentTrackID), currentTrackName, currentTrackAlbum, currentTrackArtist)
    }
    
  }, [currentTrackIDObject?.currentTrackID]);

  const setCurrentSongData = (trackID:Number, name:string, album:string, artist:string) =>{

  localStorage.setItem('currentTrackID', JSON.stringify(trackID));
  localStorage.setItem('currentTrackName', name);
  localStorage.setItem('currentTrackAlbum', album);
  localStorage.setItem('currentTrackArtist', artist);

  currentTrackIDObject?.setCurrentTrackID(trackID);
  currentTrackNameObject?.setCurrentTrackName(name);
  currentTrackAlbumObject?.setCurrentTrackAlbum(album);
  currentTrackArtistObject?.setCurrentTrackArtist(artist);
}

//Henter tittel, artist, bilde og legger enn en onclick som sender trackID childFunction. 
//Legger til bilde som bakgrunn fordi dette gjorde det lett å skalere bilde riktig i css.
const populateSongList = () =>{
    let container:any = [];
    trackList?.forEach((element: { trackID:React.ReactNode; name: React.ReactNode; album: React.ReactNode; artist: React.ReactNode; }) => {
      container.push(
        <div className="songLink" key={element.trackID as number} onClick={() => setCurrentSongData(element.trackID as number, element.name as string, element.album as string, element.artist as string)}>
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