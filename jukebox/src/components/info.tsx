import React from 'react';
import ReactDOM from 'react-dom';
import '../resources/styling/layout.css';
import Dancer from './dancer';

interface myProps {
  btheme: string,
  ctheme: string
}

class Info extends React.Component <myProps> {

  
    render() {
      
      return(
        <div id="infomain" style={{background: this.props.btheme, color: this.props.ctheme}}>
            <h1>Info</h1>
            <p> Press Dua Lipa's head, torso or tonga to change their color!</p>
        </div>
      );
    }
  }

  export default Info;