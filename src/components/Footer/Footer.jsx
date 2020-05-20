import React from 'react'
import classes from "./Footer.module.css"
import { Pagination } from "@material-ui/lab";

const Footer = ({ onChange }) => {

    return (
        <div className={classes.container}>
             <Pagination className={classes.pagination} count={10} color="primary" size="large" onChange={onChange}/>
        </div>
    )
}

export default Footer
