import React from 'react';
import ReactDOM from "react-dom";

const API_KEY = 'AIzaSyCK_ahDNQMDPKoZCHB4twcGcHq4Qhzo5mE';

// Create a new component.
// This component should produce soem HTML
const App = () => {
  return <div>Hi!</div>;
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));