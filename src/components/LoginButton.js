import React from 'react';
import {Link} from 'react-router-dom'

export const LoginButton = () =>{
  return(
    <div id="login_box" class="flex100">
        <Link to="/Login" className="flex100">Log in</Link>
      </div>
  );
}
