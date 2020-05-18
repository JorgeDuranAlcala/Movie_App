import React, { useEffect, useState }from 'react';
import './App.css';
import PelisList from './components/PelisList/PelisList';
import SectionOne from './components/SectionOne/SectionOne';

function App() {

    const [movies, setMovies] = useState([])

    useEffect(() => {

        const fetchData = async () => {

          try {
 
            const API_KEY = "c0781656eceec0f77112dad4d0a15de6"
            const url = `https://api.themoviedb.org/4/list/10?api_key=${API_KEY}`
            const { results } = await fetch(url, { method: 'get', headers: { "Content-type": "application/json; charset-utf-8" } })
            .then(res => res.json())
            .then(data => data)

            setMovies(results)
            
            
          } catch(error) {
            console.log(error)
          }
        }
        
        fetchData()
      }, [])
      
      console.log(movies)
      
  return (
    <div className="App">
      <SectionOne/>
      <PelisList movies={movies}/>
    </div>
  );
}

export default App;
