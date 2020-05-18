import React from "react"
import { TextField, FormControl } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        minWidth: 270,
        maxHeight: 'auto',
    },
    input: {
        background: 'hsl(0,0, 60)'
    }
})

const inputProps = {
    maxLength: 9,
    pattern: /[a-z]@gmail.com/
}

const SearchBar = (props) => {

    const classes = useStyles()

    return (
        <FormControl className={classes.root}>
            <TextField type="text" className={classes.input} inputProps={inputProps} fullWidth={true} variant="outlined" />
        </FormControl>
    )
}

export default SearchBar