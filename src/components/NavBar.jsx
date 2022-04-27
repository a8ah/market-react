import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {makeStyles, IconButton} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    },
    customHeight: {
      minHeight: 200
    },
    offset: theme.mixins.toolbar
  }));

const NavBar = () =>{
    const classes = useStyles();
    return (
        <div>
            <AppBar position="fixed" color="primary">
              <Toolbar>
                <IconButton color="inherit" 
                            className={classes.menuButton}
                            aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6"
                            className={classes.title}>
                  Menu
                </Typography>
                <IconButton color="inherit" >
                Sales Report
                </IconButton>
              </Toolbar>
            </AppBar>
            <div className={classes.offset}></div>
        </div>
    )
}

export default NavBar;