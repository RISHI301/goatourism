import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'right',
    marginRight: 10,
    '& > *': {
      color: '#562085',
    },
  },
}));

export default function TextButtons4() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button>Contact Us</Button>
    </div>
  );
}
