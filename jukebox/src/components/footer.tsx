import React from 'react';
import ReactDOM from 'react-dom';
import '../resources/styling/layout.css';


class Footer extends React.Component {
    render() {
      return(
        <div id="footermain">
            <h2>Created By:</h2>
            <p>Haakon, Kaspar og Tore.</p>
            <label className="darkswitch">
                <input type="checkbox" id="switch"></input>
                <span className="slider round">
                </span>
            </label>
        </div>
      );
    }
  }

  export default Footer;