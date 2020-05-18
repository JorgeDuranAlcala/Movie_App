import React, { useEffect, useState }from 'react';
import './App.css';
import { SectionOne, MovieDetails, PelisList } from './components'
import { fetchMovieData, searchMovie } from './api';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TablePagination } from '@material-ui/core';

function App() {

    const [movies, setMovies] = useState([])
    const [input, setInput] = useState('')

    useEffect(() => {

        const fetchData = async () => {

          try {
            const data = await fetchMovieData()
            setMovies(data) 
            
          } catch(error) {
            console.log(error)
          }
        }
        
        fetchData()
      }, [])

      const handleChange = async e => {

          const {value} = e.target;

          setInput(value)
      }
        
        const handleSubmit = async e => {

          const data = await searchMovie(input)
          setMovies(data);
          console.log(data)
      }
      
      
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <SectionOne onChange={handleChange} onClick={handleSubmit}/>
            { movies ? <PelisList movies={movies}/> : "...Cargando"}
            <TablePagination count={10} page={1}/>
          </Route>
          <Route path="/movieDetails/:id">
              <MovieDetails/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
