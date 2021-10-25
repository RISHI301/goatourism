import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MultiSelectTreeViewMN from './Menu/treeview3';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignContent: 'center',
  },
  lang: {
    display: 'flex',
    alignContent: 'center',
    color: 'grey',
    textTransform: 'capitalize',
  },
}));

export default function SimpleMenuMN() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div >
      <Button className={classes.lang} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Media and News
        <ExpandMoreIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MultiSelectTreeViewMN />
      </Menu>
    </div>
  );
}