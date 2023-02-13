import React from 'react';

import {Welcome} from './Welcome';
import {Home} from './Home';
import {Movie} from './Movie';
import { Background } from './Background';
import { Header } from './Header';
import { Login } from './Login';

import {Route, Routes} from 'react-router-dom'

import '../css/app.css';
import '../css/signup.css';

import { AuthProvider } from '../contexts/AuthContext';




export function App (props) {

  return (
    
      <div className="App">
        <Background />
        <Header />
        <div id="general" className="flex100">
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Welcome />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/movie" element={<Movie />}></Route>
              <Route path="/login" element={<Login />}></Route>
            </Routes>
          </AuthProvider>
        </div>
      </div>
    
    
   

    
  );
}

