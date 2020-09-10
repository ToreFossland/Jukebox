import React from 'react';
import ReactDOM from 'react-dom';
import '../resources/styling/layout.css';

class Home2 extends React.Component {
    render() {
      return(
        <div id="homemain2">
          <svg id="svgCover" z="-1">
            <defs>
              <linearGradient id="gradient-0" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#111"stop-opacity="1" />
                <stop offset="100%" stop-color="#888"stop-opacity="1" />
              </linearGradient>
            </defs>
            <rect width="100%" height="40vh" z="-100" fill="url(#gradient-0)"/>
          </svg>

          <div id="currentInfo">
            <h2> Current Song:</h2>
            <p id="currentSong">One More Time</p>
            <p id="currentArtist">by Daft Punk</p>
          </div>
          <img id="currentCover" src={require("../resources/media/onemoretime.jpg")}></img>
        </div>
      );
    }
  }

  export default Home2;