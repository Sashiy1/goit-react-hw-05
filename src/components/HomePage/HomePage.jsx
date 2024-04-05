import MovieList from "../MovieList/MovieList";
import { requestFilms } from "../services/api";
import { useEffect, useState } from "react";

const HomePage = () => {

    const [trendingFilms, setTrendingFilms] = useState("")

    useEffect(() => {
      async function fetchData() {

        
        try {
        
          const { data } = await requestFilms();
  
          setTrendingFilms(data.results)
          
        } catch (err) {
          console.log(err)
        } 
      }
  
      fetchData();
    }, []);

    
  

  return (
    <>
        <MovieList trendingFilms={trendingFilms}/>
    </>
  )

    
}

export default HomePage
