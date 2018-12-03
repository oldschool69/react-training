// Import React and ReactDOM components
import React from 'react';
import ReactDOM from 'react-dom';


// Create a react component
const App = () => {

  const buttonText = {text: 'Clicke Me!'};
  const labelText = 'Enter name:';
  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {buttonText.text}
      </button>
    </div>
  );
};


// Take the react component and shot it on screen
ReactDOM.render(<App />, document.querySelector('#root'));