import React from 'react';
import ReactDOM from 'react-dom';
import '../resources/styling/layout.css';
import Dancer from '../components/dancer';
import Dancer2 from '../components/dancer2';
import Dancer3 from '../components/dancer3';
import Dancer4 from '../components/dancer4';
import Dancer5 from '../components/dancer5';
import Dancer6 from '../components/dancer6';


interface myProps {
    btheme: string,
    ctheme: string
  }

  interface myState {

  }
class Home2 extends React.Component<myProps, myState>  {
    render() {
      return(
        <div id="homemain2" style={{background: this.props.btheme, color: this.props.ctheme}}>
          <svg id="svgCover" z="-1">
            <defs>
              <linearGradient id="gradient-0" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#DB3A32"stopOpacity="1" />
                <stop offset="80%" stopColor="#FAD500"stopOpacity="1" />
                <stop offset="100%" stopColor={this.props.btheme}stopOpacity="1" />
              </linearGradient>
            </defs>
            <rect id="svgCoverRect" width="100%" z="-100" fill="url(#gradient-0)"/>
            <Dancer />
          </svg>

          <div id="currentInfo">
            <h2> Current Song:</h2>
            <p id="currentSong">One More Time</p>
            <p id="currentArtist">by Daft Punk</p>
          </div>
          <img id="currentCover" src={require("../resources/media/img/103162573.jpg")}></img>
          
        </div>
      );
    }
  }

  export default Home2;