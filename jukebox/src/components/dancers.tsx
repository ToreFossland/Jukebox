import React from 'react';
import '../resources/styling/layout.css';

const Dancers = ({...props}) => {

  const handleClick = (index: number) => {
    props.onChange(index);
  }
  
      return(
        <div id="dancermain" style={{background: props.btheme, borderColor:props.bordertheme, color: props.ctheme}}>
            <h1>Dancers</h1>
            <p>Click on the dancer you want to see on top of the screen!</p>
            <div className="dancerlist">
              <div>
                <img src={require("../resources/media/img/dancer1.png")} onClick={() => handleClick(0)}></img>
                <p>Effect: clickable!</p>
              </div>
              <div>
                <img src={require("../resources/media/img/dancer2.png")} onClick={() => handleClick(1)}></img>
                <p>Effect: clickable!</p>
              </div>
              <div>
                <img src={require("../resources/media/img/dancer3.png")} onClick={() => handleClick(2)}></img>
                <p>Effect: clickable!</p>
              </div>
              <div>
                <img src={require("../resources/media/img/dancer4.png")} onClick={() => handleClick(3)}></img>
                <p>Effect: hoverable!</p>
              </div>
              <div>
                <img src={require("../resources/media/img/dancer5.png")} onClick={() => handleClick(4)}></img>
                <p>Effect: hoverable!</p>
              </div>
              <div>
                <img src={require("../resources/media/img/dancer6.png")} onClick={() => handleClick(5)}></img>
                <p>Effect: hoverable!</p>
              </div>
              
            </div>
        </div>
      );
    }

  export default Dancers;