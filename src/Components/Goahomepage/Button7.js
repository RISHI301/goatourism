import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import Arrow from '../../Assets/arrow.png'
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      textTransform: 'capitalize',
    },
  },
  button: {
    borderRadius: 15,
    width: 300,
  }
}));

export default function OutlinedButtons7() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="outlined" className={classes.button} >
        <Grid container spacing={1}>
          <Grid item xl={12}>
            Latest Announcements
          </Grid>
        </Grid>
        <img src={Arrow} alt="Arrow" width="10" height="100%" />
      </Button>
    </div>
  );
}
