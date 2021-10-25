import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/styles';
import EnglishLink from './LangButton1';
import HindiLink from './LangButton2';
import KonkaniLink from './LangButton3';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignContent: 'left',
    marginRight: 20,
  },
  lang: {
    color: '#562085',
  },
}));

export default function SimpleMenu01() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <Button className={classes.lang} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Languages
        <ExpandMoreIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><EnglishLink /></MenuItem>
        <MenuItem onClick={handleClose}><HindiLink /></MenuItem>
        <MenuItem onClick={handleClose}><KonkaniLink /></MenuItem>
      </Menu>
    </div>
  );
}