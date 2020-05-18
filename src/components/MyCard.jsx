import React from "react";
import { Card, CardMedia, CardActionArea } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
    root: {
        minWidth: 270,
        maxHeight: 'auto',
    },
    media: {
        width: '100%'
    }
})

const MyCard = ({src}) => {

    const classes = useStyles()

    return (
        <>
            <Card className={classes.root} variant="outlined">
                <CardActionArea>
                    <CardMedia  component="img" src={src} className={classes.media}>
                        {/* <img src={src} style={{width: '100%', position:'absolute', left: '0', top: '0'}} alt="thumbnail"/> */}
                    </CardMedia>
                </CardActionArea>
            </Card>
        </>
    )
}


export default MyCard