import React from 'react';
import '../resources/styling/layout.css';

class NavBar extends React.Component {
    render() {
      return (
        <div id="navbar">
          <div className="navelements">
            <a href="#main" id="jukeboxbutton">
            <img alt="Jukebox Icon" src={require("../resources/media/img/jukebox_logo_bigger.png")}></img>
              <p>JukeBox</p>
              
            </a>
            
            <a href="#songmain" className="navbuttons">
                <p>Songs</p>
            </a>
            <a href="#dancermain" className="navbuttons">
                <p>Dancers</p>
            </a>
            <a href="#infomain" className="navbuttons">
                <p>Info</p>
            </a>
          </div>
        </div>
      );
    }
    
}

export default NavBar;