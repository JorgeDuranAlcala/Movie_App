import React, { useState, useEffect } from "react"
import { useParams, } from "react-router-dom"
import { Typography } from "@material-ui/core"
import { getMovieById } from "../../api"
import classes from "./moviedetails.module.css"
import img from "../../assets/img/kindler.jpg";

const MovieDetails = (props) => {

    const { id } = useParams()

    const [movie, setMovie] = useState({})

    useEffect(() => {
        const fetchData = async () => {

            try {
              const data = await getMovieById(id)
              setMovie(data) 
              
            } catch(error) {
                console.log(error)
            }
        }
        
        fetchData()
    }, [id])

    console.log(movie)
    
    const { original_title, backdrop_path, poster_path, overview } = movie;

    return (

        <div className={classes.container}>
                <div style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${backdrop_path})`}} className={classes.details}>
                    <div className={classes.box_img}>
                        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="backdrop_path"/>
                    </div>
                    <div className={classes.text}>
                        <Typography variant="h4">
                            { original_title }
                        </Typography>
                        <Typography variant="body1" className={classes.overview}>
                            { overview }
                        </Typography>
                    </div>
                </div>
        </div>
    )
}

export default MovieDetails