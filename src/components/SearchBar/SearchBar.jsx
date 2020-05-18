import React from "react";
import { TextField, FormControl, Button, FormGroup } from "@material-ui/core";
import classes from "./SearchBar.module.css";

const inputProps = {
  maxLength: 100,
};

const SearchBar = ({ onClick, onChange }) => {


    const onEnter = e => {
            if(e.keyCode === 13) {
                onClick()
            }
    }

  return (
    <>
      <FormGroup row={true}>
        <FormControl className={classes.root}>
          <TextField
            type="text"
            className={classes.input}
            inputProps={inputProps}
            variant="outlined"
            onChange={onChange}
            placeholder="Enter a movie name"
            onKeyDown={onEnter}
          />
        </FormControl>
        <FormControl>
          <Button 
          className={classes.btn}
           fullWidth={true}
           size="medium"
           color="primary"
           variant="contained"
           onClick={onClick}
          >
            Search
          </Button>
        </FormControl>
      </FormGroup>
    </>
  );
};

export default SearchBar;
