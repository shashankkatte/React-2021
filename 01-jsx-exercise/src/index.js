// Import the React and React Dom libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getTime() {
  return (new Date()).toLocaleTimeString()
}

function App() {
  return (
    <div>
      <div>Current Time:</div>
      <h3>{getTime()}</h3>
    </div>
  );
}

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
