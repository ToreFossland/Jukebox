import React from 'react';
import ReactDOM from 'react-dom';
import '../css/layout.css';

class Main extends React.Component {
    render() {
      return(
        <div id="main">
          <h1>Welcome to JukeBox</h1>
          <p> Here we have a wide selection of songs available for karaoke usage. Click "Songs" in the menu to begin!</p>
          <img src="jukebox/img/baby.gif"></img>
        </div>
      );
    }
  }

  export default Main;