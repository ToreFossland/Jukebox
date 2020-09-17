import React from 'react';
import ReactDOM from 'react-dom';
import '../resources/styling/dancers_design.css';


//Dua Lipa colors
const yellow = "#FBC661";
const purple = "#FA3EB9"
const white = "#CBCDDA";
const blue = "#29DAFF";
const red = "#DB4114";
const green = "#81DB46";


interface myProps {
  
}

interface myState {
  hairColor: string,
  topColor: string,
  bottomColor: string
}
class Dancer2 extends React.Component <myProps, myState> {
  constructor(props: any) {
    super(props);
    this.state = {
      hairColor: yellow, 
      topColor: white,
      bottomColor: red
    };
    this.changeHair = this.changeHair.bind(this);
    this.changeTop = this.changeTop.bind(this);
    this.changeBottom = this.changeBottom.bind(this);
    
  }

  componentDidMount() {
    var hair = localStorage.getItem('hair2');
    var top = localStorage.getItem('top2');
    var bottom = localStorage.getItem('bottom2');
    if(hair != null) {
      this.setState({hairColor: hair});
    }

    if(top != null) {
      this.setState({topColor: top});
    }

    if(bottom != null) {
      this.setState({bottomColor: bottom});
    }
    
  }
    changeHair() {
      const newColor = this.state.hairColor == purple ? yellow : purple;
      localStorage.setItem('hair2', newColor);
      this.setState({hairColor: newColor});
    }

    changeTop() {
      const newColor = this.state.topColor == blue ? white : blue;
      localStorage.setItem('top2', newColor);
      this.setState({topColor: newColor});
    }

    changeBottom() {
      const newColor = this.state.bottomColor == red ? green : red;
      localStorage.setItem('bottom2', newColor);
      this.setState({bottomColor: newColor});
    }

    render() {
      return(


<svg width="300" height="500" viewBox="0 0 1111 754" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="dancer2">
<g id="surface2">
<path id="Vector" opacity="0.1" d="M646.666 753.935C798.459 753.935 921.512 727.778 921.512 695.512C921.512 663.246 798.459 637.089 646.666 637.089C494.873 637.089 371.821 663.246 371.821 695.512C371.821 727.778 494.873 753.935 646.666 753.935Z" fill="#6C63FF"/>
</g>
<g id="legright2">
<path id="Vector_2" d="M606.045 484.373V494.574C610.456 496.085 615.089 492.571 619.792 492.793C622.536 492.914 625.028 494.323 627.741 494.75C628.078 494.832 628.43 494.851 628.776 494.804C629.121 494.758 629.453 494.648 629.751 494.481C630.248 494.009 630.541 493.386 630.575 492.728C631.58 487.303 632.685 474.181 623.541 473.254C616.787 472.54 614.205 483.649 606.045 484.373Z" fill="#FFB9B9"/>
<path id="Vector_3" d="M666.3 419.913C666.3 419.913 656.713 439.294 658.14 458.24C658.286 459.989 657.976 461.744 657.236 463.359C653.049 472.639 651.19 482.673 651.799 492.71C651.799 492.895 651.799 493.081 651.799 493.266C652.025 496.306 653.136 499.232 655.015 501.738C656.893 504.244 659.469 506.235 662.471 507.503C665.474 508.77 668.791 509.267 672.073 508.94C675.356 508.613 678.482 507.475 681.122 505.646C688.157 500.74 695.804 492.57 700.045 479.087C701.205 475.33 702.601 471.639 704.226 468.033C709.25 457.192 718.928 434.083 716.023 424.086C712.195 410.834 666.3 419.913 666.3 419.913Z" fill="#FFB9B9"/>
<path id="Vector_4" opacity="0.1" d="M606.045 484.373V494.574C610.456 496.085 615.089 492.571 619.792 492.793C622.536 492.914 625.028 494.323 627.741 494.75C628.078 494.832 628.43 494.851 628.776 494.804C629.121 494.758 629.453 494.648 629.751 494.481C630.248 494.009 630.541 493.386 630.575 492.728C631.58 487.303 632.685 474.181 623.541 473.254C616.787 472.54 614.205 483.649 606.045 484.373Z" fill="black"/>
</g>
<g id="legleft2">
<path id="legleft_2" d="M660.059 432.812C660.059 432.812 653.407 492.969 654.663 503.634C655.487 510.663 652.653 520.604 650.553 526.576C649.427 529.746 649.007 533.092 649.317 536.416C651.327 556.725 644.443 587.021 642.282 590.341C639.981 593.939 640.192 618.625 640.192 618.625L640.926 624.421L641.448 628.511L641.941 632.424C641.941 632.424 643.076 646.798 641.197 650.155C639.83 652.594 640.112 663.193 640.363 668.841C640.463 670.983 640.564 672.411 640.564 672.411C640.548 673.412 640.141 674.373 639.418 675.119C637.72 677.048 633.509 679.237 623.108 678.903C614.798 678.634 612.054 675.435 611.411 672.059C611.125 669.679 611.495 667.271 612.486 665.058C612.808 664.297 613.059 663.843 613.059 663.843L622.104 637.756C622.066 635.949 622.13 634.142 622.294 632.341C622.415 630.252 622.887 628.194 623.691 626.239V626.164C625.581 622.455 621.3 600.783 621.3 600.783C615.029 578.406 616.657 531.807 618.164 529.6C619.672 527.392 621.651 518.406 621.651 518.406C621.651 518.406 621.892 513.074 622.274 500.898C622.656 488.722 618.375 466.364 618.375 466.364C604.186 423.706 617.752 409.907 617.752 409.907L660.079 419.069L660.059 432.812Z" fill="#FFB9B9"/>
</g>
<g id="head2"onClick={this.changeHair}>
<path id="Vector_5" d="M612.607 228.434C612.48 229.83 612.51 231.235 612.697 232.625C613.029 235.407 613.491 238.189 614.004 240.971C614.155 241.787 614.315 242.594 614.476 243.401C616.064 251.358 618.114 259.249 619.501 267.243C620.229 271.333 620.719 275.457 620.968 279.595C621.535 286.925 620.812 294.291 618.828 301.407C617.666 305.367 615.907 309.157 613.602 312.665C612.673 314.194 611.447 315.552 609.984 316.671C609.662 316.884 609.327 317.079 608.979 317.255C606.894 318.261 604.597 318.837 602.246 318.943C600.649 319.082 599.051 319.128 597.443 319.128C596.177 319.128 594.9 319.128 593.634 319.036C589.122 318.859 584.59 318.442 580.098 318.47C572.712 318.526 564.863 319.991 559.557 324.887C553.608 330.377 552.252 338.593 549.739 346.216C548.849 349.123 547.595 351.924 546.001 354.562C545.016 356.39 543.405 357.866 541.418 358.763C539.709 359.254 537.9 359.371 536.133 359.106L515.17 357.483C512.376 357.27 509.382 357.094 506.98 358.457C504.277 359.987 503.051 363.029 501.815 365.783C499.305 371.392 496.043 376.688 492.107 381.548C490.409 383.653 488.479 385.74 485.887 386.695C483.012 387.743 479.797 387.242 476.762 386.695C467.235 385.063 456.543 382.689 451.639 374.741C445.961 365.468 451.106 353.663 457.759 345.066C464.411 336.47 472.923 328.3 474.38 317.663C474.772 314.807 474.491 311.589 472.37 309.54C470.702 307.926 468.18 307.314 466.592 305.635C463.798 302.659 465.135 297.975 466.873 294.34C471.432 284.774 477.722 275.993 485.475 268.374C497.604 256.486 513.813 246.674 518.456 230.687C521.3 220.866 519.129 210.443 519.411 200.251C519.511 196.412 520.044 192.387 522.355 189.234C524.998 185.636 529.581 183.745 534.113 183.021C545.79 181.167 559.085 185.516 568.893 179.173C575.013 175.204 578.299 167.729 585.082 164.892C590.921 162.443 597.704 164.15 603.613 166.44C613.662 170.307 623.892 177.095 625.51 187.278C625.653 188.237 625.74 189.203 625.772 190.171C625.729 192.597 625.893 195.021 626.264 197.423C627.822 204.786 634.977 211.899 631.65 218.752C621.42 219.92 613.431 219.948 612.607 228.434Z" style={{fill: this.state.hairColor}}/>
<path id="Vector_6" opacity="0.1" d="M618.827 301.407C615.2 306.451 612.125 311.858 609.019 317.255C606.934 318.261 604.637 318.837 602.286 318.943C600.689 319.082 599.091 319.128 597.483 319.128C596.217 319.128 594.941 319.128 593.674 319.036C589.162 318.859 584.63 318.442 580.138 318.47C572.752 318.526 564.903 319.991 559.597 324.887C553.648 330.377 552.292 338.593 549.779 346.216C549.418 346.216 549.056 346.216 548.694 346.216C543.469 346.216 538.876 343.165 534.866 340.086C533.811 339.374 532.92 338.476 532.244 337.443C531.62 336.205 531.403 334.825 531.621 333.474C532.203 328.105 536.173 323.654 539.74 319.388C543.601 314.771 547.181 309.96 550.463 304.977C551.97 302.705 553.478 300.192 553.206 297.558C553.005 295.425 551.709 293.524 551.196 291.447C549.82 286.105 553.719 280.782 558.301 277.286C562.884 273.79 568.35 271.24 572.199 267.039C576.048 262.838 577.887 257.033 578.319 251.423C578.631 247.481 578.5 243.076 581.404 240.174C585.685 235.88 592.308 238.542 597.624 238.95C603.171 239.386 608.607 240.062 614.044 240.925C614.195 241.741 614.356 242.548 614.516 243.355C616.104 251.311 618.154 259.203 619.541 267.197C620.269 271.287 620.759 275.41 621.008 279.549C621.568 286.896 620.831 294.278 618.827 301.407Z" fill="black"/>
<path id="Vector_7" d="M608.195 262.987C624.54 262.987 637.79 250.759 637.79 235.676C637.79 220.593 624.54 208.366 608.195 208.366C591.851 208.366 578.601 220.593 578.601 235.676C578.601 250.759 591.851 262.987 608.195 262.987Z" fill="#FFB9B9"/>
<path id="Vector_8" d="M588.047 256.273C589.052 253.351 588.449 250.171 588.871 247.129C589.996 238.885 598.407 232.245 598.016 223.945C597.867 223.17 597.991 222.371 598.367 221.664C598.926 221.083 599.709 220.727 600.548 220.672C604.929 219.939 609.964 220.329 613.22 217.528C616.476 214.727 616.396 209.655 615.903 205.389C615.632 203.098 615.24 200.576 613.341 199.064C612.045 198.19 610.537 197.62 608.949 197.404C603.469 196.255 597.959 195.25 592.418 194.391C586.831 193.519 580.952 192.823 575.636 194.632C570.32 196.44 566.19 200.687 562.401 204.74C558.834 208.551 555.025 213.132 556.03 218.094C556.583 220.783 558.482 223.036 559.748 225.512C561.076 228.174 561.679 231.095 561.503 234.02C561.328 236.946 560.381 239.787 558.743 242.297C556.11 246.229 551.709 249.336 550.644 253.843C549.639 258.053 551.96 262.634 555.859 265.018C563.848 269.877 584.901 265.481 588.047 256.273Z" style={{fill: this.state.hairColor}}/>
<path id="Vector_9" d="M675.344 272.455L670.993 305.839L641.971 308.009C641.971 308.009 611.009 299.858 622.425 279.874C627.61 270.786 624.355 265.342 619.652 262.152C616.205 260.004 612.298 258.565 608.195 257.933C608.195 257.933 607.351 206.928 617.059 224.233C621.42 232.013 630.314 235.11 638.785 236.168C645.492 236.909 652.279 236.743 658.934 235.676L675.344 272.455Z" fill="#FFB9B9"/>
</g>
<g id="armleft2">
<path id="Vector_10" d="M601.483 297.345L598.307 308.631C598.307 308.631 604.668 343.712 602.156 350.667C599.644 357.623 599.814 362.102 599.814 362.102C599.814 362.102 618.235 371.069 624.435 366.59C630.635 362.111 630.625 343.137 630.625 343.137L643.689 330.776L627.108 308.677L601.483 297.345Z" fill="#757A9B"/>
<path id="Vector_11" d="M624.937 362.723L623.661 367.972L621.018 378.636C621.018 378.636 608.457 378.636 602.347 373.925C598.598 371.041 599.443 366.507 600.658 363.419C601.106 362.262 601.671 361.147 602.347 360.089L624.937 362.723Z" fill="#CBCDDA"/>
<path id="Vector_12" d="M620.576 371.069V394.865C620.576 394.865 601.322 436.215 595.664 443.783C594.164 445.789 593.001 447.993 592.217 450.32C590.421 455.683 587.604 460.708 583.896 465.158C577.726 472.577 574.852 482.212 574.852 482.212C545.297 473.013 578.118 447.594 578.118 447.594C578.118 447.594 590.177 423.399 591.182 415.443C591.966 409.239 600.337 385.925 603.985 375.956C604.99 373.174 605.673 371.394 605.673 371.394L620.576 371.069Z" fill="#FFB9B9"/>
</g>
<g id="torso2">
<path id="Vector_13" onClick={this.changeBottom} d="M613.964 388.652C613.964 388.652 606.547 415.545 604.919 417.168C604.919 417.168 653.156 426.089 660.059 432.812L661.064 425.161L664.461 427.248C664.461 427.248 692.347 408.933 716.717 431.885C716.717 431.885 728.645 398.5 725.259 392.241C721.872 385.981 681.163 391.434 681.163 391.434L613.964 388.652Z"  style={{fill: this.state.bottomColor}}/>
<path id="Vector_14" onClick={this.changeTop} d="M664.461 254.112C664.461 254.112 680.288 303.03 628.786 291.669L643.689 345.688L613.964 396.692C613.964 396.692 709.18 411.529 725.259 392.287C725.259 392.287 717.47 334.328 720.485 314.853C723.5 295.379 710.938 264.999 704.155 263.033C697.372 261.067 664.461 254.112 664.461 254.112Z" style={{fill: this.state.topColor}}/>
<path id="Vector_15" d="M621.48 264.526C621.48 264.526 596.629 282.665 595.795 288.693C594.961 294.72 598.468 308.937 598.468 308.937L623.259 323.311C623.259 323.311 651.899 333.669 630.464 350.974C609.03 368.278 601.483 405.381 601.483 405.381C601.483 405.381 611.873 416.815 631.299 383.941C631.299 383.941 650.06 365.088 650.895 355.814C651.729 346.541 654.653 318.099 641.971 300.479C633.6 288.85 629.048 275.793 625.771 269.033C624.984 267.098 623.458 265.495 621.48 264.526V264.526Z" fill="#757A9B"/>
</g>
<g id="armright2">
<path id="Vector_16" d="M664.793 180.388C661.778 181.686 655.005 183.392 645.197 179.414C645.197 179.414 660.612 207.234 661.617 212.492C662.622 217.751 662.622 224.242 661.275 225.169C659.929 226.097 655.919 235.676 655.919 235.676L640.172 236.316C640.172 236.316 650.221 240.025 650.221 247.11C650.221 254.195 672.329 267.512 684.057 272.77C695.784 278.028 743.679 293.515 743.679 293.515L765.124 312.646C765.124 312.646 756.743 292.551 728.273 274.625C699.804 256.699 700.136 246.035 700.136 246.035C700.136 246.035 694.779 208.477 687.745 197.961C680.71 187.445 676.691 172.31 676.691 172.31C676.691 172.31 671.063 179.47 667.717 179.664C666.702 179.737 665.711 179.982 664.793 180.388Z" fill="#757A9B"/>
<path id="Vector_17" d="M654.389 183.297C651.73 184.001 648.963 182.177 648.633 179.502V179.502L648.256 176.315C647.744 171.986 650.238 167.937 654.563 166.875C659.128 165.755 664.993 164.786 669.426 165.686C674.595 166.729 675.424 171.075 675.295 174.291V174.291C675.219 176.579 673.365 178.276 671.091 178.878L654.389 183.297Z" fill="#CBCDDA"/>
<path id="Vector_18" d="M709.18 275.552L718.224 341.7L732.293 331.814C732.293 331.814 726.595 320.686 730.283 318.683C733.971 316.68 739.328 329.644 739.328 329.644C739.328 329.644 775.173 331.499 765.124 312.646L753.728 299.042L731.288 284.343L709.18 275.552Z" fill="#757A9B"/>
<path id="Vector_19" d="M668.351 164.882L648.253 177.559L646.715 173.544L643.399 164.882C643.399 164.882 603.534 137.989 593.816 128.873C584.099 119.757 575.567 122.846 575.567 122.846C565.849 129.495 551.609 132.74 547.931 120.991C545.188 112.274 565.719 107.72 576.481 105.959C580.388 105.315 584.416 105.972 587.847 107.813C595.203 111.764 608.659 118.876 614.919 121.612C623.803 125.47 658.804 150.824 658.804 152.215C658.804 153.142 663.377 158.873 666.191 162.286C667.447 163.816 668.351 164.882 668.351 164.882Z" fill="#FFB9B9"/>
</g>
</g>
</svg>
      );
    }
  }

  export default Dancer2;