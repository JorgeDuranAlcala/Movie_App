import React, { useEffect, useState }from 'react';
import './App.css';
import {  
  MovieDetails,
  Layout,
  Main
  } from './components'
import { fetchMovieData, searchMovie } from './api';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

    const [movies, setMovies] = useState([])
    const [input, setInput] = useState('')

    useEffect(() => {

        const fetchData = async () => {

          try {
            const data = await fetchMovieData(1)
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

      const handlePageChange = async (e, page) => {
          try {
            const data = await fetchMovieData(page)
            setMovies(data) 
            
          } catch(error) {
            console.log(error)
          }
      }

      const handleGenres = async (e, id) => {
          console.log(id)
      }
        
        const handleSubmit = async e => {

          const data = await searchMovie(input)
          setMovies(data);
      }
      
      
  return (
    <div className="App">
      <Router>
        <Layout handlePageChange={handlePageChange}>
          <Switch>
            <Route path="/" exact>
                <Main 
                movies={movies} 
                handleChange={handleChange} 
                handleSubmit={handleSubmit} 
                handleGenres={handleGenres} 
                />
            </Route>
            <Route path="/movieDetails/:id">
                <MovieDetails/>
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
