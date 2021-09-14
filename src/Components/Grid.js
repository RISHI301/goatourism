import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>

          <Hidden mdUp>
        <Grid item md={5} xs={12}>
          <Paper className={classes.paper}>The logo, spanning 1 of 3</Paper>
        </Grid>
        </Hidden>

        <Hidden mdUp>
        <Grid item md={7} xs={12}>
          <Paper className={classes.paper}>The navigation, spanning 2 of 3</Paper>
        </Grid>
        </Hidden>

        <Hidden mdUp>
        <Grid item md={12} xs={12}>
          <Paper className={classes.paper}>The carousel, spanning 3 of 3</Paper>
        </Grid>
        </Hidden>

        <Grid item md={4} xs={12}>
          <Paper className={classes.paper}>Feature, spanning 1 of 3</Paper>
        </Grid>

        <Grid item md={4} xs={12}>
          <Paper className={classes.paper}>Feature, spanning 1 of 3</Paper>
        </Grid>

        <Grid item md={4} xs={12}>
          <Paper className={classes.paper}>Feature, spanning 1 of 3</Paper>
        </Grid>

        <Grid item md={12} xs={12}>
          <Paper className={classes.paper}>The Footer, spanning 3 of 3</Paper>
        </Grid>

      </Grid>
    </div>
  );
}
