import React, { useState } from "react";
import { Card, CardMedia, CardActionArea } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";
const useStyles = makeStyles({
    root: {
        minWidth: 270,
        maxHeight: 'auto',
    },
    media: {
        width: '100%'
    }
})

const MyCard = ({ src, id}) => {

   const [redir, setRedir] = useState(false)

    const classes = useStyles()

    const handleClick = () => {
        setRedir(true)
    }

    return (
        <>
            { redir && <Redirect to={`/movieDetails/${id}`} /> }
            <Card className={classes.root} variant="outlined">
                <CardActionArea>
                    <CardMedia  component="img" src={src} className={classes.media} onClick={handleClick}/>
                </CardActionArea>
            </Card>
        </>
    )
}


export default MyCard