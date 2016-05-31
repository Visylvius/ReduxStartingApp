import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';
const API_KEY = 'your api key here';

// Create a new component This component should produce
//some HTML
const App = () => {
  return (
    <div>
     <SearchBar />
    </div>
  );
};

//Take this components generated HTML and put it
//on the page (DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
