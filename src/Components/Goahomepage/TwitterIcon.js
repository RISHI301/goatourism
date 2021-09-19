import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons2() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained">
        <TwitterIcon/>
      </Button>
    </div>
  );
}
