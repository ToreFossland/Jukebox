import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import '../resources/styling/layout.css';
import {Context} from '../context'

const Footer = ({...props}) => {

  const handleChange = () => {
    props.onChange();
  }
      return(
        <div id="footermain">
            <h2>Created By:</h2>
            <p>Haakon, Kaspar og Tore.</p>
            <button id="pageThemeButton" onClick={handleChange}>Change Theme</button>
        </div>
      );
  }

  export default Footer;