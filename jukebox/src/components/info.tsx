import React from 'react';
import ReactDOM from 'react-dom';
import '../resources/styling/layout.css';
import Dancer from './dancer';


const Info = ({...props})=>{

      return(
        <div id="infomain" style={{background: props.btheme, color: props.ctheme}}>
            <h1>Info</h1>
            <p> Press Dua Lipa's head, torso or tonga to change their color!</p>
        </div>
      );
    }

  export default Info;
