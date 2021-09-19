import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SystemUpdateAltRoundedIcon from '@material-ui/icons/SystemUpdateAltRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function OutlinedButtons1() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="outlined">
      Phased Reopening of Areas outside Containment zone w.e.f.  14/09/2020
      <SystemUpdateAltRoundedIcon/>
      </Button>
    </div>
  );
}
