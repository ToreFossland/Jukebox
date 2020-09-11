import React from 'react';
import '../resources/styling/layout.css';

class NavBar extends React.Component {
    render() {
      return (
        <div id="navbar">
          <div className="navelements">
            <a href="#main" id="jukeboxbutton">
              <p>JukeBox</p>
            </a>
            
            <a href="#main" className="navbuttons">
                <p>Home</p>
            </a>
            <a href="#songmain" className="navbuttons">
                <p>Songs</p>
            </a>
            <a href="#infomain" className="navbuttons">
                <p>Dancer</p>
            </a>
          </div>
        </div>
      );
    }
    
}

export default NavBar;