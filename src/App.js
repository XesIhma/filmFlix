import React from 'react';
import {useState, useEffect} from 'react';

import Welcome from './Welcome';
import Home from './Home';
import Movie from './Movie';

import './app.css';

const App = () => {

  return (
    <div className="app">
      <Welcome />
      <Home />
      <Movie />


    </div>
  );
}

export default App;