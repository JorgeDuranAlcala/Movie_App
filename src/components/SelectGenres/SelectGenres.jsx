import React, { useEffect, useState } from "react"
import classes from "./SelectGenres.module.css"
import { ButtonGroup, Button } from "@material-ui/core"
import { getGenres } from "../../api"

const SelectGenres = ({ onClick }) => {

    const [Genres, setGenres] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const { genres } =  await getGenres()
            setGenres(genres)
        }
        
        fetchData()
    }, [])
    


    return (
            <ButtonGroup  className={classes.container} color="primary">
                { Genres.map( ({ id, name }) => <Button  key={id} onClick={e => onClick(e, id)} color="primary">{name}</Button>)}
            </ButtonGroup>
    )
}

export default SelectGenres;