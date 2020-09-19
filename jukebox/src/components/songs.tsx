import React from 'react';
import ReactDOM from 'react-dom';
import {Consumer} from '../context';
import '../resources/styling/layout.css';



interface myProps {
  functionCallFromParent: Function
}


class Songs extends React.Component<myProps> {
  
  

  childFunction=(trackID: number)=>{
    console.log(trackID + "hore")
    this.props.functionCallFromParent(trackID);
  }
//Henter tittel, artist, bilde og legger enn en onclick som sender trackID childFunction. 
//Legger til bilde som bakgrunn fordi dette gjorde det lett å skalere bilde riktig i css.
  populateSongList(trackList:any){
    let container:any = [];
    trackList.forEach((element: { trackID:React.ReactNode; name: React.ReactNode; artist: React.ReactNode; }) => {
      container.push(
        <div className="songLink" key={element.trackID as number}  onClick={() => this.childFunction(element.trackID as number)}>
          <div className="songLinkImg" style={{ backgroundImage: `url(${require("../resources/media/img/"+ element.trackID +".jpg")})` }} ></div>
          <p>{element.artist} - {element.name}</p>
        </div>
      )
    });
    return container;
  }

  

  render() {
      return(
        <Consumer>
              {value => {
                  const { trackList} = value;

             return(
                  <div id="songmain">
                      <h1>Songs</h1>
                      <p>Here is our library of available songs.</p>
                      <div className="songlist">
                        {this.populateSongList(trackList)}
                      </div>
                  </div>
            )
          }}
        </Consumer>
      );
    }
  }

  export default Songs;