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

export default function OutlinedButtons2() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="outlined">
      Covid Order – Covid negative certificate compulsory for persons entering the State.
      <SystemUpdateAltRoundedIcon/>
      </Button>
    </div>
  );
}
