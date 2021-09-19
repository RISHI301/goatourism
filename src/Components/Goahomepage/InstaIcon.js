import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons4() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained">
        <InstagramIcon/>
      </Button>
    </div>
  );
}
