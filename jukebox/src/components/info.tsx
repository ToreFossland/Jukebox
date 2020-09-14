import React from 'react';
import ReactDOM from 'react-dom';
import '../resources/styling/layout.css';
import Dancer from './dancer';



class Info extends React.Component {

  
    render() {
      
      return(
        <div id="infomain">
            <h1>Info</h1>
            <p> Press Dua Lipa's head, torso or tonga to change their color!</p>
        </div>
      );
    }
  }

  export default Info;