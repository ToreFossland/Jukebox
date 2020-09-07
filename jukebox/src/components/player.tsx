import React from 'react';
import { Player, ControlBar, PlayToggle } from 'video-react';
import ReactDOM from 'react-dom';
import '../resources/styling/layout.css';

class Player extends React.Component {
    render() {
      return (
        <div id="player">
              <Player
      autoPlay
      poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    >
      <ControlBar autoHide={false} disableDefaultControls={true}>
        <PlayToggle />
      </ControlBar>
    </Player>
        </div>
      );
    }
}

export default Player;