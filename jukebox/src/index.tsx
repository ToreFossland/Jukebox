import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

var element = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <a href="index.tsx" id="home">
          JukeBox
        </a>
        <a href="index.tsx" className="navbuttons">
          Home
        </a>
        <a href="index.tsx" className="navbuttons">
          Songs
        </a>
        <a href="index.tsx" className="navbuttons">
          Documentation
        </a>
      </div>
    );
  }
  
}

class Main extends React.Component {
  render() {
    return(
      <div id="main">

      </div>
    );
  }
}
ReactDOM.render(<Main />,
  document.getElementById('root')
);

ReactDOM.render(<NavBar />,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
