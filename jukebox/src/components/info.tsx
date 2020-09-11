import React from 'react';
import ReactDOM from 'react-dom';
import '../resources/styling/layout.css';

class Info extends React.Component {

  changeHair() {
    var hair = document.getElementById("head");
    
  }
    render() {
      return(
        <div id="infomain">
            <h1>Dancer</h1>
            <p> Here you can change the style of dancing Dua Lipa above!</p>
            <button onClick={this.changeHair}>Hair</button>
        </div>
      );
    }
  }

  export default Info;