import React from 'react';




const API_URL = 'http://www.omdbapi.com?apikey=302e1b1d';

export const Home = () =>{

  const scifiIDs = ["tt3659388", "tt1375666", "tt0816692", "tt0062622", "tt2051879"]
  const dramaIDs = ["tt1872194", "tt1733283", "tt0107818", "tt0073486", "tt1907668"]
  const categoriesIDs = [scifiIDs, dramaIDs]

  const sciFi = []
  const drama = []

  const categories = [sciFi, drama]

  for (let i = 0; i <categoriesIDs.length; i++){
    for (let j = 0; j < categoriesIDs[i].length; j++){
      const response = fetch(`${API_URL}&i=${categoriesIDs[i][j]}`)
      categories[i][j] = response.json()
    }
  }



  return(
    <div>
      <h1>Benc</h1>
      {categories.map(category => (
        <ul>
          {category.map(position => (
            <li>
              {position.title}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
