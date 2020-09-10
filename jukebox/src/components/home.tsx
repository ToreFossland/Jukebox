import React from 'react';
import '../resources/styling/layout.css';


class Home extends React.Component {
    render() {
      return(
        <div id="homemain">
          <h1>Welcome to JukeBox</h1>
          <p> Here we have a wide selection of songs available for karaoke usage. Click "Songs" in the menu or scroll down to begin!</p>

        </div>
      );
    }
  }

  export default Home;