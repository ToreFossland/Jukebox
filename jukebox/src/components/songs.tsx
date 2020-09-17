import React from 'react';
import ReactDOM from 'react-dom';
import {Consumer} from '../context';
import '../resources/styling/layout.css';



interface myProps {
  functionCallFromParent: Function
}


class Songs extends React.Component<myProps> {

  childFunction=(e: any)=>{
    e.preventDefault();
    this.props.functionCallFromParent("oneMoreTime");
  }
  childFunction2=(e: any)=>{
    e.preventDefault();
    this.props.functionCallFromParent("singThemeSong");
  }

  constructor(props: myProps) {
    super(props);
  }
  
  render() {
      return(
        <Consumer>
        {value => {
            const { trackList} = value;
            console.log(trackList)
             return(
              <React.Fragment>
                <div id="songmain">
                    <h1>Songs</h1>
                    <p>Here is our library of available songs.</p>
                    <div className="songlist">
                        <div>
                          <button onClick={this.childFunction.bind(this)}>OneMoreTime</button>

                        </div>
                        <div>
                          <button onClick={this.childFunction2.bind(this)}>singThemeSong</button>
                        </div>
                        <div>
            
                        </div>

                        <div>
                            
                        </div>
                        <div>
                            
                        </div>
                        <div>
                            
                        </div>
                        <div>
                            
                        </div>
                        <div>
                            
                        </div>
                        <div>
                            
                        </div>
                        <div>
                            
                        </div>
                        <div>
                            
                        </div>
                        <div>
                            
                        </div>
                        <div>
                            
                        </div>

                        
                    </div>
                </div>
          </React.Fragment>
            )
          }}
        </Consumer>
      );
    }
  }

  export default Songs;