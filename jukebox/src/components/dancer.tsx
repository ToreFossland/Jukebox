import React from 'react';
import ReactDOM from 'react-dom';
import '../resources/styling/dancers_design.css';



//Dua Lipa colors
const yellow = "#FBC661";
const purple = "#FA3EB9"
const white = "#EEEFF3";
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

class Dancer extends React.Component<myProps, myState> {
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
    changeHair() {
      const newColor = this.state.hairColor == purple ? yellow : purple;
      this.setState({hairColor: newColor});
    }

    changeTop() {
      const newColor = this.state.topColor == blue ? white : blue;
      this.setState({topColor: newColor});
    }

    changeBottom() {
      const newColor = this.state.bottomColor == red ? green : red;
      this.setState({bottomColor: newColor});
    }


    render() {
      return(
        <svg id="dancer"  width="300" height="500" x="25" viewBox="0 0 1114 812" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="undraw_dua_lipa_ixam 1">
            <g id="surface">
            <path id="Vector" opacity="0.2" d="M539.5 811C690.55 811 813 782.794 813 748C813 713.206 690.55 685 539.5 685C388.45 685 266 713.206 266 748C266 782.794 388.45 811 539.5 811Z" fill="#333"/>
            </g>
            <g id="armleft">
            <path id="Vector_2" d="M489.264 261.049C487.024 262.319 485.844 264.849 485.014 267.279C481.094 278.719 481.734 291.159 479.944 303.119C478.464 312.999 475.314 322.619 474.614 332.579C474.154 339.169 474.754 345.899 473.054 352.279C471.817 356.388 470.034 360.313 467.754 363.949C463.586 371.049 458.878 377.819 453.674 384.199C448.834 390.139 445.734 396.879 439.754 401.669C435.754 404.919 430.704 407.289 428.024 411.729C424.514 417.539 426.024 425.039 428.554 431.349C429.664 434.189 431.124 437.179 433.864 438.519C436.604 439.859 439.774 439.189 442.254 437.609C444.658 435.899 446.675 433.701 448.174 431.159C452.534 424.569 455.824 417.329 460.094 410.679C462.994 406.169 466.334 401.959 469.674 397.749L474.874 391.189C480.164 384.519 485.494 377.809 491.874 372.189C493.206 371.103 494.351 369.805 495.264 368.349C496.093 366.62 496.569 364.744 496.664 362.829L499.514 338.289C500.604 328.839 502.564 319.209 504.114 309.819C505.894 299.069 507.624 287.739 503.844 277.519C501.126 270.452 495.949 264.603 489.264 261.049V261.049Z" fill="#FBB3B2"/>
            </g>
            <g id="legleft">
            <path id="Vector_3" d="M590.071 477.449C589.561 480.449 589.161 484.449 586.701 486.189C584.841 487.519 582.981 488.849 581.141 490.189C577.235 493.002 573.578 496.147 570.211 499.589C568.341 501.589 566.621 503.669 564.741 505.589C562.631 507.789 560.351 509.809 558.051 511.809C549.281 519.419 541.051 528.709 531.051 534.669C514.541 544.549 497.831 554.579 484.401 568.349C483.48 569.077 482.769 570.036 482.341 571.129C481.912 572.222 481.781 573.409 481.961 574.569C482.131 579.569 483.451 584.699 484.281 589.669C485.751 598.489 482.941 607.399 480.181 615.899C476.181 628.059 474.571 640.829 468.861 652.269C464.451 661.099 460.011 670.029 457.761 679.629C456.557 685.362 455.755 691.173 455.361 697.019C454.874 701.163 454.72 705.34 454.901 709.509C455.151 713.159 457.441 716.229 458.831 719.609C460.301 723.179 458.521 727.409 455.671 730.019C452.821 732.629 449.081 734.019 445.521 735.479C442.241 736.845 439.028 738.355 435.881 740.009C432.741 741.669 429.571 743.539 427.491 746.419C425.081 749.759 424.341 754.189 421.491 757.159C418.491 760.309 413.781 761.109 409.421 761.429C402.161 761.96 394.863 761.658 387.671 760.529C385.984 760.371 384.353 759.834 382.901 758.959C382.187 758.502 381.631 757.837 381.309 757.053C380.987 756.269 380.915 755.405 381.101 754.579C381.731 752.579 384.051 751.859 386.051 751.379C391.291 750.109 397.331 748.679 402.571 747.379L406.021 736.379C406.974 733.073 408.133 729.83 409.491 726.669C410.851 723.669 412.561 720.779 414.081 717.829C419.751 706.889 423.131 694.459 426.031 682.479C428.971 670.258 430.581 657.756 430.831 645.189C430.951 639.009 430.741 632.819 431.191 626.659C431.851 617.659 433.901 608.829 435.191 599.899C436.481 590.969 435.901 580.709 435.431 571.699C435.059 563.781 436.291 555.869 439.052 548.438C441.814 541.008 446.048 534.212 451.501 528.459C455.391 524.409 459.841 520.939 463.871 517.039C468.311 512.541 472.497 507.8 476.411 502.839C494.901 480.479 514.741 458.999 537.891 441.499C543.641 437.149 550.581 436.319 557.251 433.569C561.602 431.776 566.196 430.64 570.881 430.199C571.407 430.111 571.947 430.155 572.451 430.329C572.966 430.613 573.394 431.031 573.691 431.539C573.791 431.689 573.901 431.839 573.991 431.989C581.451 442.909 585.251 455.859 588.931 468.569C589.731 471.479 590.571 474.489 590.071 477.449Z" fill="#FBB3B2"/>
            </g>
            <g id="legright">
            <path id="Vector_4" d="M572.101 444.949L583.101 466.949C583.101 466.949 586.101 545.949 590.101 558.949C591.459 563.419 592.574 567.959 593.441 572.549C595.311 582.333 597.69 592.013 600.571 601.549C601.597 604.637 602.442 607.782 603.101 610.969C603.101 612.969 606.841 632.969 608.101 640.969C609.601 650.469 622.601 685.469 624.601 698.469C626.601 711.469 627.101 719.969 625.101 733.969C623.101 747.969 626.101 756.969 654.101 756.969C682.101 756.969 660.101 746.969 660.101 746.969C660.101 746.969 650.601 739.469 648.601 715.469C647.291 699.719 648.771 689.789 649.951 684.819C651.264 679.393 652.147 673.873 652.591 668.309C654.074 649.168 652.542 629.914 648.051 611.249C641.853 586.251 639.463 560.46 640.961 534.749C641.961 516.279 644.081 497.549 648.151 486.949C658.151 460.949 655.151 402.949 639.151 396.949C623.151 390.949 590.151 396.949 590.151 396.949L572.101 444.949Z" fill="#FBB3B2"/>
            </g>
            <g id="torso" >
            <path id="Vector_5" onClick={this.changeBottom}  d="M532.431 444.429C548.53 443.824 564.419 448.245 577.891 457.079C579.551 450.409 579.661 442.769 581.301 436.079C584.301 423.859 592.781 413.329 603.441 406.649C614.101 399.969 626.811 396.929 639.391 396.719C633.211 385.909 625.991 375.719 615.911 368.389C611.981 365.549 607.561 363.079 604.911 359.019C600.851 359.789 597.261 360.569 593.721 362.709L547.461 390.709C543.03 393.493 538.457 396.047 533.761 398.359C529.777 400.232 525.638 401.758 521.391 402.919C520.547 404.05 519.959 405.352 519.667 406.733C519.375 408.114 519.387 409.543 519.701 410.919C520.478 413.912 521.652 416.787 523.191 419.469L531.321 435.229C532.681 437.869 534.041 441.129 532.471 443.649C531.821 444.639 532.681 443.239 532.431 444.429Z" style={{fill: this.state.bottomColor}}/>
            <path id="Vector_6"  d="M497.621 318.849C496.762 352.542 507.985 385.43 529.261 411.569L573.021 383.419C582.281 377.419 591.581 371.479 601.451 366.579C602.661 365.969 603.571 364.239 604.641 363.409C595.471 359.159 589.931 349.279 588.231 339.319C586.531 329.359 588.081 319.149 589.631 309.159C578.461 305.949 566.761 305.029 555.151 304.799C534.451 304.369 514.061 306.279 497.621 318.849Z" fill="#FBB3B2"/>
            <path id="Vector_7" onClick={this.changeTop} d="M549.791 252.509C547.301 254.079 543.901 253.029 541.661 251.109C539.421 249.189 537.961 246.569 535.961 244.329C533.961 242.089 531.271 240.199 528.351 240.579C526.041 240.889 524.161 242.579 522.001 243.419C516.001 245.879 508.531 242.039 502.731 245.039C500.211 246.339 498.461 248.729 496.661 250.929C492.783 255.657 488.251 259.809 483.201 263.259C487.631 266.939 492.271 271.389 492.631 277.139C493.091 284.479 486.551 290.059 482.631 296.269C478.911 302.149 477.391 309.619 479.511 316.269C481.631 322.919 487.741 328.329 494.691 328.729C503.431 321.909 514.131 317.389 525.221 317.219C528.467 317.106 531.712 317.49 534.841 318.359C537.46 319.25 540.013 320.322 542.481 321.569C558.027 328.71 575.036 332.095 592.131 331.449C589.661 324.449 595.441 317.119 598.361 310.319C600.521 305.269 601.361 299.769 602.981 294.539C607.121 281.623 616.128 270.828 628.091 264.439C625.601 255.919 618.671 248.869 611.231 244.049C609.369 242.794 607.353 241.786 605.231 241.049C600.951 239.649 596.341 239.729 591.841 239.829L581.071 240.059C580.196 240.04 579.321 240.137 578.471 240.349C577.323 240.793 576.261 241.432 575.331 242.239C567.861 247.799 557.671 247.569 549.791 252.509Z" style={{fill: this.state.topColor}}/>
            </g>
            <g id="head" onClick={this.changeHair}>
            <path id="Vector_8" d="M539.321 223.569C537.531 228.639 536.851 234.069 535.001 239.129C534.742 240.008 534.268 240.809 533.621 241.459C532.681 242.095 531.576 242.442 530.441 242.459L523.441 243.259C523.921 248.929 527.851 253.889 532.711 256.849C543.561 263.469 557.831 261.009 569.111 255.169C575.181 252.039 581.291 247.169 582.111 240.429C580.111 241.919 577.111 240.709 575.821 238.579C574.531 236.449 574.681 233.799 575.011 231.349C575.593 227.044 576.74 222.834 578.421 218.829C578.754 218.218 578.894 217.521 578.821 216.829C578.521 215.549 576.931 215.149 575.621 214.989C567.681 214.049 559.041 211.989 551.061 212.079C546.401 212.139 539.321 217.949 539.321 223.569Z" fill="#FBB3B2"/>
            <path id="Vector_9" d="M623.331 206.329C620.676 203.362 618.349 200.116 616.391 196.649C613.221 190.509 612.471 183.449 610.771 176.739C609.071 170.029 605.941 163.109 599.881 159.739C593.201 156.089 584.281 157.539 578.091 153.459C573.018 151.91 567.851 150.687 562.621 149.799C557.261 148.899 551.621 148.379 546.541 150.369C538.861 153.369 534.541 161.289 529.041 167.489C521.548 175.905 511.431 181.543 500.331 183.489C508.875 185.625 517.87 185.062 526.081 181.879C524.362 188.042 520.77 193.517 515.801 197.549C521.043 198.186 526.351 197.142 530.961 194.569C530.401 200.509 529.845 206.452 529.291 212.399C528.781 217.859 527.491 224.399 522.351 226.319C531.091 224.689 540.111 222.419 546.851 216.619C551.701 212.449 554.971 206.779 558.161 201.229C562.491 193.669 566.961 185.569 566.511 176.869C568.388 180.784 571.516 183.961 575.401 185.899C579.285 187.837 583.705 188.425 587.961 187.569C578.961 196.109 577.471 209.689 576.531 222.059C576.301 225.059 576.091 228.179 577.121 231.059C577.941 233.053 579.144 234.867 580.661 236.399C585.151 241.289 590.861 244.859 596.491 248.399C597.485 249.128 598.63 249.623 599.841 249.849C601.271 249.867 602.681 249.523 603.941 248.849L604.611 248.569C600.737 242.546 598.338 235.693 597.611 228.569L626.491 241.059L628.851 240.439C627.136 236.334 626.044 231.996 625.611 227.569L647.221 236.919C650.031 236.539 652.861 236.229 655.691 235.999C642.521 229.279 632.731 217.649 623.331 206.329Z" style={{fill: this.state.hairColor}}/>
            <path id="Vector_10" d="M571.101 226.949C588.222 226.949 602.101 213.07 602.101 195.949C602.101 178.828 588.222 164.949 571.101 164.949C553.981 164.949 540.101 178.828 540.101 195.949C540.101 213.07 553.981 226.949 571.101 226.949Z" fill="#FBB3B2"/>
            <path id="Vector_11" d="M601.311 180.509C600.071 177.229 598.871 173.859 596.801 171.029C593.271 166.209 587.631 163.479 582.121 161.189C580.681 160.589 579.121 160.009 577.611 160.529C576.528 161.025 575.626 161.846 575.031 162.879C573.591 158.089 568.361 156.349 563.681 157.139C554.171 158.749 547.681 167.319 542.121 175.229L532.961 188.299C530.861 191.299 528.651 194.809 529.431 198.389C536.791 198.086 544.034 196.453 550.811 193.569C546.251 202.419 539.021 209.569 531.901 216.569C540.661 214.879 548.301 209.329 554.141 202.569C559.981 195.809 564.231 187.869 568.441 179.999C569.781 177.489 572.031 174.419 573.601 171.259L593.431 191.569C603.951 202.399 614.651 213.379 627.711 220.969C614.961 210.829 607.101 195.759 601.311 180.509Z" style={{fill: this.state.hairColor}}/>
            </g>
            <g id="armright">
            <path id="Vector_12" d="M590.321 272.839C591.521 279.409 595.051 285.269 598.271 291.109C608.211 309.109 615.821 328.279 623.621 347.299C626.201 353.569 628.861 359.949 633.251 365.109C635.919 368.018 638.79 370.735 641.841 373.239C649.587 380.304 656.97 387.757 663.961 395.569L708.401 443.459C710.722 445.876 713.297 448.035 716.081 449.899C718.451 451.569 720.821 453.239 723.311 454.719C730.471 459.009 738.471 461.669 746.391 464.299C748.081 464.859 749.981 465.409 751.571 464.619C753.161 463.829 753.881 461.919 754.231 460.159C755.088 455.556 754.58 450.803 752.769 446.485C750.959 442.168 747.925 438.474 744.041 435.859C738.421 432.209 731.581 431.149 725.151 429.279C718.721 427.409 712.041 424.209 709.101 418.189C705.573 410.853 701.564 403.757 697.101 396.949C693.671 391.809 689.791 386.949 686.571 381.679C683.631 376.839 681.261 371.679 678.131 366.929C670.571 355.499 658.681 346.839 653.791 334.029C648.581 320.369 642.571 307.269 637.171 293.679C634.521 286.999 630.811 280.739 628.701 273.869C627.611 270.329 626.961 266.639 625.551 263.219C624.141 259.799 621.811 256.529 618.411 255.059C612.911 255.259 609.511 260.859 605.751 264.889C601.755 269.338 596.264 272.167 590.321 272.839V272.839Z" fill="#FBB3B2"/>
            <path id="Vector_13" d="M608.021 274.759C613.941 271.539 623.211 268.479 628.601 264.449C629.351 263.889 627.541 261.389 627.601 260.449C627.601 259.929 626.841 258.929 626.601 258.449C622.471 250.139 611.771 246.579 602.681 248.449C599.67 249.19 596.749 250.26 593.971 251.639C591.845 252.442 589.888 253.636 588.201 255.159C585.641 257.779 584.891 261.659 584.591 265.309C584.341 268.419 584.331 271.669 585.591 274.539C587.181 278.229 590.411 284.809 594.881 283.049C599.091 281.389 603.841 277.039 608.021 274.759Z" style={{fill: this.state.topColor}}/>
            </g>
            </g>
        </svg>
      );
    }
  }

  export default Dancer;