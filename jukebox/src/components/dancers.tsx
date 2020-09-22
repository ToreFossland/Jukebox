import React from 'react';
import ReactDOM from 'react-dom';
import '../resources/styling/layout.css';
import Dancer from './dancer';

interface myProps {
  btheme: string,
  ctheme: string
}

class Dancers extends React.Component <myProps> {

  
    render() {
      
      return(
        <div id="dancermain" style={{background: this.props.btheme, color: this.props.ctheme}}>
            <h1>Dancers</h1>
            <p>Click on the dancer you want to see on top of the screen!</p>
            <div className="dancerlist">
              <div>
                <img src={require("../resources/media/img/dancer1.png")}></img>
                <p>Effect: clickable!</p>
              </div>
              <div>
                <img src={require("../resources/media/img/dancer2.png")}></img>
                <p>Effect: clickable!</p>
              </div>
              <div>
                <img src={require("../resources/media/img/dancer3.png")}></img>
                <p>Effect: clickable!</p>
              </div>
              <div>
                <img src={require("../resources/media/img/dancer4.png")}></img>
                <p>Effect: hoverable!</p>
              </div>
              <div>
                <img src={require("../resources/media/img/dancer5.png")}></img>
                <p>Effect: hoverable!</p>
              </div>
              <div>
                <img src={require("../resources/media/img/dancer6.png")}></img>
                <p>Effect: hoverable!</p>
              </div>
              
            </div>
        </div>
      );
    }
  }

  export default Dancers;
