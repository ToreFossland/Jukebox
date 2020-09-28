import React from 'react';
import '../resources/styling/layout.css';

interface myProps {
  btheme: string,
  ctheme: string
}

const Info = ({...props})=>{

      return(
        <div id="infomain" style={{background: props.btheme, color: props.ctheme}}>
            <h1>Info</h1>
            <p> The different dancers have different interactive effects; try clicking or hovering on different parts to see what they can do! </p>
        </div>
      );
    }

  export default Info;