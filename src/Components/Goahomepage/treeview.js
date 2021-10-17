import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    height: 216,
    flexGrow: 1,
    maxWidth: 400,
  },
});

export default function MultiSelectTreeView() {
  const classes = useStyles();

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      multiSelect
    >
      <TreeItem nodeId="4" label="About DOT" />
      <TreeItem nodeId="5" label="Accomodation">
        <TreeItem nodeId="6" label="Staying in Goa">
          <TreeItem nodeId="7" label="Starred Hotels Info" />
          <TreeItem nodeId="8" label="Unstarred Hotels Info" />
        </TreeItem>
      </TreeItem>
      <TreeItem nodeId="9" label="Transportation">
        <TreeItem nodeId="10" label="To and From Goa">
          <TreeItem nodeId="11" label="By Air" />
          <TreeItem nodeId="12" label="By Road" />
          <TreeItem nodeId="13" label="By Rail" />
          <TreeItem nodeId="14" label="By Sea" />
        </TreeItem>
        <TreeItem nodeId="15" label="Within Goa" />
      </TreeItem>
      <TreeItem nodeId="16" label="Travel Desk">
        <TreeItem nodeId="17" label="Reg. of Foreign Tourism" />
        <TreeItem nodeId="18" label="Map" />
      </TreeItem>
      <TreeItem nodeId="19" label="Download">
        <TreeItem nodeId="20" label="Citizen Charter" />
        <TreeItem nodeId="21" label="Acts" />
        <TreeItem nodeId="22" label="Policies" />
        <TreeItem nodeId="23" label="Forms" />
        <TreeItem nodeId="24" label="Statistics" />
        <TreeItem nodeId="25" label="Admin Report" />
        <TreeItem nodeId="26" label="Official Fonts" />
        <TreeItem nodeId="27" label="Circulars" />
      </TreeItem>
      <TreeItem nodeId="28" label="Events">
        <TreeItem nodeId="29" label="Event Archives" />
        <TreeItem nodeId="30" label="Photo Gallery" />
      </TreeItem>
      <TreeItem nodeId="31" label="Media and News">
        <TreeItem nodeId="32" label="News" />
        <TreeItem nodeId="33" label="Awards" />
        <TreeItem nodeId="34" label="Books">
          <TreeItem ndodeId="35" label="Ebooks" />
          <TreeItem ndodeId="36" label="Books of Goa" />
        </TreeItem>
      </TreeItem>
      <TreeItem nodeId="37" label="Covid Guide">
        <TreeItem nodeId="38" label="Safety Guides" />
        <Link to={process.env.PUBLIC_URL + '/covidguide'}>
          <TreeItem nodeId="39" label="Ofiicial Govt. Circulars" />
        </Link>
      </TreeItem>
      <TreeItem nodeId="40" label="Contact Us" />
    </TreeView>
  );
}
