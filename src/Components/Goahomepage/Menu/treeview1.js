import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    height: 'auto',
    flexGrow: 1,
    width: 'auto',
    padding:10,
  },
});

export default function MultiSelectTreeViewAC() {
  const classes = useStyles();

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      multiSelect
    >
        <TreeItem nodeId="6" label="Staying in Goa">
          <TreeItem nodeId="7" label="Starred Hotels Info" />
          <TreeItem nodeId="8" label="Unstarred Hotels Info" />
        </TreeItem>
    </TreeView>
  );
}
