import React from 'react'
import { SectionOne, SelectGenres, PelisList } from '..'

const Main = ({ handleGenres, handleChange, handleSubmit, movies  }) => {
    return (
        <>
            <SectionOne onChange={handleChange} onClick={handleSubmit}/>
            <SelectGenres onClick={handleGenres}/>
            { movies ? <PelisList movies={movies}/> : "...Cargando"}
        </>
    )
}

export default Main
