import React from "react"
import { AppBar, Toolbar, Typography } from "@material-ui/core"
import { Menu } from "@material-ui/icons"
import classes  from "./Navbar.css";

const Navbar = (props) => {
    return <nav className={classes.nav}>
        <AppBar color="primary">
            <Toolbar>
                <Menu/>
            </Toolbar>
        </AppBar>
    </nav>
}

export default Navbar