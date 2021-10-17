import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      color: 'black',
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
