import React, { useEffect, useState }from 'react';
import './App.css';
import { SectionOne, MovieDetails, PelisList } from './components'
import { fetchMovieData, searchMovie } from './api';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';

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
            <Footer onChange={handlePageChange}/>
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
