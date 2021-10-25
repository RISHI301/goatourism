import React from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import GovtLogo from '../../Assets/govtgoalogo.png'
import Grid from '@material-ui/core/Grid';
import GoaLogo from '../../Assets/goalogo.png'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
    },
  },
  heading: {
    marginTop: 50,
    display: 'flex',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 1,
  },
  subtitle: {
    display: 'flex',
    fontsize: 10,
    textAlign: 'left',
  },
  Goa: {
    display: 'flex',
    marginLeft: 200,
    marginTop: 15,
    alignContent: 'right'
  },
  search: {
    marginTop: 50,
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  button: {
    marginLeft: 750,
  },
  searchinput: {
    border: 1,
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'purple'
  },
  inputRoot: {
    color: 'black',
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

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0}>
        <Grid container spacing={1}>
          <Grid item xl={6}>
            <img src={GovtLogo} className="GovernmentofGoa" alt="GovernmentofGoa" width="150" height="150" />
          </Grid>
          <Grid item xl={6}>
            <Paper elevation={0} className={classes.heading}>
              Department of Tourism Goa
            </Paper>
            <Paper elevation={0} className={classes.subtitle}>
              Government of Goa
            </Paper>
          </Grid>
        </Grid>
      </Paper>
      <Grid item xl={4} className={classes.button}>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase className={classes.searchinput}
            placeholder="search"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
      </Grid>
      <Paper elevation={0}>
        <Grid container spacing={1} className={classes.Goa}>
          <Grid item xl={2}>
            <img src={GoaLogo} className="Goa" alt="Goa" width="175" height="100" />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
