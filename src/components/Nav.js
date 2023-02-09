import React from 'react';

import {Link} from 'react-router-dom'


export const Nav = () =>{
  return(
    <nav>
      <ul>
        <CustomLink to="/">Główna</CustomLink>
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/movie">Film</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({to, children}) {
  return(
    <li>
      <Link to={to} className="flex100" >{children}</Link>
    </li>
  )
}



