import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      color: 'black',
      textTransform: 'capitalize',
    },
  },
}));

export default function TextButtons8() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button>Hyperlinking Policies</Button>
    </div>
  );
}
