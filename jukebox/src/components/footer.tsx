import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import '../resources/styling/layout.css';
import {Context} from '../Context'


const Footer = () => {
      return(
        <div id="footermain">
            <h2>Created By:</h2>
            <p>Haakon, Kaspar og Tore.</p>
        </div>
      );
  }

  export default Footer;