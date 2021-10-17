import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/styles';
import EnglishLink from './LangButton1';
import HindiLink from './LangButton2';
import KonkaniLink from './LangButton3';

export default function SimpleMenu01() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Languages
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><EnglishLink/></MenuItem>
        <MenuItem onClick={handleClose}><HindiLink/></MenuItem>
        <MenuItem onClick={handleClose}><KonkaniLink/></MenuItem>
      </Menu>
    </div>
  );
}