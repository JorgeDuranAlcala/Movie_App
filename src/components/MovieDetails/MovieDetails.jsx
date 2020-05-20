import React, { useState, useEffect } from "react"
import { useParams, } from "react-router-dom"
import { Button, Typography } from "@material-ui/core"
import { getMovieById } from "../../api"
import classes from "./moviedetails.module.css"

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
    }, [])

    console.log(movie)
    
    const { original_title, backdrop_path, overview } = movie;

    return (

        <div className={classes.container}>
                <div className={classes.box_img}>
                    <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt="backdrop_path"/>
                </div>
                <div className={classes.details}>
                    <Typography variant="h4">
                        {original_title} 
                    </Typography>
                    <div className={classes.overview}>    
                        <Typography variant="body1">
                            { overview }
                        </Typography>
                    </div>
                </div>
             <Button color="primary" href="/">Previus</Button>
        </div>
    )
}

export default MovieDetails