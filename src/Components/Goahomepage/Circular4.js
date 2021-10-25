import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SystemUpdateAltRoundedIcon from '@material-ui/icons/SystemUpdateAltRounded';
import Download from '../../Assets/Download.svg'
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

export default function OutlinedButtons4() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="outlined" className={classes.button}>
        <Grid container spacing={1}>
          <Grid item xl={12}>
            Corona Virus Prevention
          </Grid> </Grid>
        <img src={Download} className="Icon" alt="Icon" />
      </Button>
    </div>
  );
}
