//import { useLoaderData, useNavigation } from 'react-router-dom';

export const Movie = () =>{

  // const movieUrl = useLoaderData()
  // const navigation = useNavigation()

  // if (navigation.state === "loading"){
  //   return <h1>Movie is still loading...</h1>
  // }

  return(
    <div>
      <h1>This is page of film</h1>
      <img src="https://random.dog/fb6ff563-8d84-4244-a3b1-24cafe220a35.webm"></img>
    </div>
  )
}

// export const dataLoader = async () => {
//   const response = await fetch("https://random.dog/woof.json") 
//   const movie = await response.json()

//   return movie.url;
// }