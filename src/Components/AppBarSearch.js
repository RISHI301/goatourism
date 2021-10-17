import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { alpha, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SimpleMenu from './Goahomepage/Menu';
import { Link, Router } from "react-router-dom";
import goalogo from "./../Assets/goalogo.png";
import { Grid } from '@material-ui/core';
import Homeicon from './../Assets/Group 88.svg';
import Searchbutton from './../Assets/Group 11.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  AppBar: {
    padding: '1%',
    background: '#ffffff',
    borderStyle: 'solid none solid none',
    borderColor: '#B1B1B1',
    boxShadow: '0 0 0 0'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    right: '2%',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'purple'
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.AppBar}>
        <Toolbar>
        <Grid item xl={2} xs={2}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <SimpleMenu/>
          </IconButton>
          </Grid>
          <Grid item xl={2} xs={2}>
          <Link to={process.env.PUBLIC_URL + '/goahomepage'}>
          <img src={Homeicon} className="Homeicon" alt="Homeicon"/>
          </Link>
          </Grid>
          <Grid item xl={6} xs={6}>
          <img src={goalogo} className="Goa-Logo" alt="Goa-Logo" width="90" height="100%"/>
          </Grid>
          <Grid item xl={2} xs={2}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
            <img src={Searchbutton} className="search" alt="search"/>
            </div>
          </div>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
