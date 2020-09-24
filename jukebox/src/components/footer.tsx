import React from 'react';
import '../resources/styling/layout.css';

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