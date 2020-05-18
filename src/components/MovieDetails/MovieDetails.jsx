import React from "react"
import { useParams } from "react-router-dom"

const MovieDetails = (props) => {

    const { id } = useParams()

    return (
        <div>
            {`your movie Id is ${id}`}
        </div>
    )
}

export default MovieDetails