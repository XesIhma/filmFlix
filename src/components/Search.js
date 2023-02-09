import React from 'react';

import './app.css';

export const Search = () =>{
  return(
    <div id="search_box">
      <form action="search.php" class="flex100">
        <input type="text" class="text_input" placeholder="wyszukaj film"/>
      </form>
    </div>
  );
}
