import React from 'react'
import MyCard from '../MyCard';
import { GridList, GridListTile, makeStyles } from '@material-ui/core';

const styles = makeStyles({
    gridList: {
      width: '80%',
      height: 'auto',
      margin: '4vmin 0 !important'
    },
})

const PelisList = ({ movies }) => {

    const classes = styles()

    return (
        <GridList cellHeight="auto" cols={3} className={classes.gridList} spacing={20}>
        {
          movies.map(movie => {
              const { poster_path, id } = movie
            return (
                <GridListTile key={poster_path} >
                    <MyCard  src={`https://image.tmdb.org/t/p/w500${poster_path}`} id={id} />
                </GridListTile>
            )
          })
        }
      </GridList>
    )
}

export default PelisList
