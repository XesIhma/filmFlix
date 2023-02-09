import React from 'react';

import {Welcome} from './Welcome';
import {Home} from './Home';
import {Movie} from './Movie';

import {Route, Routes} from 'react-router-dom'

import '../css/app.css';
import '../css/signup.css';

import { Background } from './Background';
import { Header } from './Header';


export function App (props) {

  return (
    <div className="App">
      <Background />
      <Header />
      <div id="general" className="flex100">
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/movie" element={<Movie />}></Route>
        </Routes>
      </div>
    </div>
   

    
  );
}

