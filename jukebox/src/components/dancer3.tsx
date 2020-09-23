import React from 'react';
import ReactDOM from 'react-dom';
import '../resources/styling/dancers_design.css';

const yellow = "#FBC661";
const purple = "#FA3EB9"
const white = "#CBCDDA";
const blue = "#29DAFF";
const red = "#DB4114";
const green = "#81DB46";

interface myProps {
  
}

interface myState {
  leftEye: string,
  rightEye: string,
  color: string
}

class Dancer3 extends React.Component <myProps, myState>{

  constructor(props: any) {
    super(props);
    this.state = {
      leftEye: "#3F3D56", 
      rightEye: "#3F3D56",
      color: "#CFCCE0"
    };
    this.changeLeftEye = this.changeLeftEye.bind(this);
    this.changeRightEye = this.changeRightEye.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }


  componentDidMount() {
    var leftEye = localStorage.getItem('leftEye');
    var rightEye = localStorage.getItem('rightEye');
    var body = localStorage.getItem('body3');
    if(leftEye != null) {
      this.setState({leftEye: leftEye});
    }

    if(rightEye != null) {
      this.setState({rightEye: rightEye});
    }

    if(body != null) {
      this.setState({color: body});
    }
    
  }

    changeLeftEye() {
      const newColor = this.state.leftEye == "#FADBAC" ? "#3F3D56" : "#FADBAC";
      localStorage.setItem('leftEye', newColor);
      this.setState({leftEye: newColor});
    }


    changeRightEye() {
      const newColor = this.state.rightEye == "#FADBAC" ? "#3F3D56" : "#FADBAC";
      localStorage.setItem('rightEye', newColor);
      this.setState({rightEye: newColor});
    }

    changeColor() {
      const newColor = this.state.color == "#99DBFF" ? "#CFCCE0" : "#99DBFF";
      localStorage.setItem('body3', newColor);
      this.setState({color: newColor});
    }

    render() {
      return(
        <svg className="dancers" width="200" x="80" y="20" height="500" viewBox="0 0 886 763" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="mello" clipPath="url(#clip0)">
          <g id="head3">
          <path id="Vector" onClick={this.changeColor}  d="M555.711 476.836C462.723 501.945 371.329 503.721 281.867 477.222C271.35 474.108 264.161 464.874 264.161 454.394V193.058C264.161 181.365 273.058 171.39 285.184 169.488C369.577 156.253 458.981 157.278 552.489 169.983C564.844 171.661 574.016 181.751 574.016 193.626V453.841C574.016 464.541 566.528 473.915 555.711 476.836Z" style={{fill: this.state.color}}/>
          <path id="Vector_2" onClick={this.changeLeftEye} d="M363.941 298.004C363.941 298.004 342.554 266.745 355.715 258.519C368.877 250.293 388.619 273.326 388.619 273.326C388.619 273.326 413.297 251.938 426.459 260.164C439.621 268.39 413.297 298.004 413.297 298.004C413.297 298.004 433.04 302.939 434.685 316.101C436.33 329.263 442.911 363.812 414.943 365.457C399.96 366.339 391.587 362.026 387.042 357.832C385.387 356.349 383.251 355.517 381.03 355.491C378.809 355.465 376.653 356.246 374.965 357.689C365.48 365.679 348.4 374.889 335.973 352.296C331.037 317.746 363.941 298.004 363.941 298.004Z" style={{fill: this.state.leftEye}}/>
          <path id="Vector_3" onClick={this.changeRightEye} d="M521.881 301.294C521.881 301.294 543.268 270.035 530.107 261.809C516.945 253.583 497.203 276.616 497.203 276.616C497.203 276.616 472.525 255.229 459.363 263.455C446.202 271.681 472.525 301.294 472.525 301.294C472.525 301.294 452.782 306.23 451.137 319.392C449.492 332.553 442.911 367.102 470.88 368.748C485.863 369.629 494.236 365.317 498.781 361.122C500.435 359.64 502.571 358.808 504.792 358.781C507.014 358.755 509.169 359.536 510.858 360.979C520.342 368.969 537.423 378.18 549.849 355.586C554.785 321.037 521.881 301.294 521.881 301.294Z" style={{fill: this.state.rightEye}}/>
          <path id="Vector_4" d="M337.976 386.726C337.976 386.726 368.838 411.574 434.648 410.007C500.458 408.441 521.74 405.754 535.807 390.243C549.874 374.731 554.043 392.647 549.675 404.39C545.307 416.133 539.697 436.173 506.913 439.422C485.329 441.56 438.68 442.067 409.323 442.164C386.504 442.352 363.943 437.333 343.356 427.488C343.084 427.357 342.812 427.224 342.542 427.091C336.297 424.006 331.039 419.237 327.362 413.322C323.685 407.407 321.735 400.581 321.733 393.616C321.736 388.082 322.71 385.092 326.313 384.002C332.805 382.037 337.976 386.726 337.976 386.726Z" fill="#3F3D56"/>
          <path id="Vector_5" d="M394.714 480.615L388.403 531.101L486.851 537.412V476.829L394.714 480.615Z" fill="#FFB9B9"/>
          </g>
          <g id="torso3">
          <path id="Vector_6" onClick={this.changeColor} d="M667.339 763.338L587.5 603.661C582.731 587.867 567.836 562.144 521.56 545.617L486.851 516.254L460.977 515.325L357.48 500.179C357.48 500.179 277.965 495.131 226.217 526.684L212.333 520.374C212.333 520.374 189.614 439.596 199.711 381.537L141.652 376.488C141.652 376.488 110.099 514.063 125.244 555.714C140.39 597.365 195.925 627.656 195.925 627.656L245.149 676.88L264.081 762.707H559.425L564.124 740.188L587.192 762.707L667.339 763.338Z" style={{fill: this.state.color}}/>
          <g id="lefthand3">
          <path id="Vector_7" d="M145.439 379.013C145.439 379.013 130.293 353.769 130.293 336.099C130.293 336.099 103.788 308.332 111.361 300.759C118.934 293.186 135.342 322.216 135.342 322.216C135.342 322.216 105.05 288.138 113.885 283.089C122.72 278.04 151.75 315.905 151.75 315.905L161.847 310.856C161.847 310.856 140.4 257.96 155.536 256.584C162.478 255.953 178.255 307.07 178.255 307.07L194.663 348.721C194.663 348.721 200.974 363.867 198.449 372.702C196.911 378.104 195.648 383.58 194.663 389.11L145.439 379.013Z" fill="#FFB9B9"/>
          <path id="Vector_8" opacity="0.1" d="M154.905 315.274L147.963 304.546C147.963 304.546 115.147 299.497 118.934 310.856C122.72 322.216 137.866 317.167 137.866 317.167L146.701 326.002L154.905 315.274Z" fill="black"/>
          <path id="Vector_9" d="M160.585 314.643L150.487 300.759C150.487 300.759 117.672 295.711 121.458 307.07C125.244 318.429 140.39 313.381 140.39 313.381L149.225 322.216L160.585 314.643Z" fill="#FFB9B9"/>
          <path id="Vector_10" opacity="0.1" d="M184.566 385.323C184.566 385.323 193.401 371.44 190.203 350.24C187.006 329.04 169.42 317.167 169.42 317.167C169.42 317.167 158.06 326.002 169.42 348.721C169.42 348.721 155.536 361.342 166.895 381.537" fill="black"/>
          <path id="Vector_11" d="M189.614 385.323C189.614 385.323 198.449 371.44 195.252 350.24C192.054 329.04 174.468 317.167 174.468 317.167C174.468 317.167 163.109 326.002 174.468 348.721C174.468 348.721 160.585 361.342 171.944 381.537" fill="#FFB9B9"/>
          </g>
          </g>
          </g>
          <defs>
          <clipPath id="clip0">
          <rect width="885.587" height="762.892" fill="white"/>
          </clipPath>
          </defs>
        </svg>
      );
    }
  }

  export default Dancer3;