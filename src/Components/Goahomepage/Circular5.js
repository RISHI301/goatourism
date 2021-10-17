import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SystemUpdateAltRoundedIcon from '@material-ui/icons/SystemUpdateAltRounded';
import Download from '../../Assets/Download.svg'
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function OutlinedButtons5() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="outlined">
        Covid-19 Guidelines Order
        <img src={Download} className="Icon" alt="Icon"/>
      </Button>
    </div>
  );
}
