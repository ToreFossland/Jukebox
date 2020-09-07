import React from 'react';
import ReactDOM from 'react-dom';
import '../css/layout.css';

class NavBar extends React.Component {
    render() {
      return (
        <div id="navbar">
          <div className="navelements">
            <a href="index.tsx" id="jukeboxbutton">
              <p>JukeBox</p>
            </a>
            <a href="index.tsx" className="navbuttons">
                <p>Home</p>
            </a>
            <a href="index.tsx" className="navbuttons">
                <p>Songs</p>
            </a>
            <a href="index.tsx" className="navbuttons">
                <p>Info</p>
            </a>
          </div>
        </div>
      );
    }
    
}

export default NavBar;