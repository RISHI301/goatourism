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
    padding: 5,
  },
});

export default function MultiSelectTreeViewMN() {
  const classes = useStyles();

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      multiSelect
    >
        <TreeItem nodeId="11" label="News"/>
        <TreeItem nodeId="11" label="Awards"/>
        <TreeItem nodeId="6" label="Books">
          <TreeItem nodeId="7" label="Ebooks" />
          <TreeItem nodeId="8" label="Books of Goa" />
        </TreeItem>
    </TreeView>
  );
}
