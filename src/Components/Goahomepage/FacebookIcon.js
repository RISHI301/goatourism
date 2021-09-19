import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons3() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained">
        <FacebookIcon/>
      </Button>
    </div>
  );
}
