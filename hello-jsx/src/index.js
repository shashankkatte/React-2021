// Import the React and React Dom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create the Reacy components
const App = () => {
  const buttonText = 'click me!';
  return (
    <div>
      <label className="label" for="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {' '}
        {buttonText}
      </button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
