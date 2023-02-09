import React from 'react';

import {Nav} from './Nav';
import {Search} from './Search';
import {LoginButton} from './LoginButton';

export const Header = () =>{
  return(
    <header>
      <Nav />
      <Search />
      <LoginButton />
    </header>
    
  );
}
