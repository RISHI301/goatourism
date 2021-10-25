import React from 'react';
import TextButtons5 from './Terms&Conditions';
import TextButtons6 from './Disclaimer';
import TextButtons7 from './PrivacyPolicies';
import TextButtons8 from './HyperlinkingPolicies';
import TextButtons9 from './Help';
import ButtonLink5 from './CallUs';
import ButtonLink6 from './Email';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/styles';
import Youtube from '../../Assets/Youtube.svg'
import Twitter from '../../Assets/Twitter.svg'
import Facebook from '../../Assets/Facebook.svg'
import Insta from '../../Assets/Insta.svg'
import Images from './Images';

const useStyles = makeStyles((theme) => ({
  header: {
    fontWeight: 'bold',
    margin: 10,
    backgroundColor: '#ECECEC',
    fontSize: 20,
    padding: 10,
  },
  para: {
    backgroundColor: '#ECECEC',
  },
  copyright: {
    backgroundColor: '#999999',
    color: 'white'
  },
  Icon: {
    margin: 10,
  }
}));

export default function AppFooter() {
  const classes = useStyles();
  return (
    <div className="root">

      <footer className="App-footer">
        <div className="flexbox-container">
          <Paper elevation={0} className={classes.header}>
            Policies
          </Paper>
          <TextButtons5 />
          <TextButtons6 />
          <TextButtons7 />
          <TextButtons8 />
          <TextButtons9 />
          <Paper elevation={0} className={classes.header}>
            Contact Us
          </Paper>
          <Paper elevation={0} className={classes.para}>
            Goa Tourism Department
          </Paper>
          <Paper elevation={0} className={classes.para}>
            Paryatan Bhavan, 2nd Floor, Patto
          </Paper>
          <Paper elevation={0} className={classes.para}>
            Panaji-Goa, India 403001
          </Paper>

          <p>
            <ButtonLink5 />
          </p>
          <p>
            <ButtonLink6 />
          </p>
          <Grid container spacing={1}>
            <Grid item xl={3} xs={3}>
              <img src={Youtube} alt="Icon" className={classes.Icon} />
            </Grid>
            <Grid item xl={3} xs={3}>
              <img src={Twitter} alt="Icon" className={classes.Icon} />
            </Grid>
            <Grid item xl={3} xs={3}>
              <img src={Facebook} alt="Icon" className={classes.Icon} />
            </Grid>
            <Grid item xl={3} xs={3}>
              <img src={Insta} alt="Icon" className={classes.Icon} />
            </Grid>
            <Grid item xl={12} xs={12}>
              <Images />
            </Grid>
          </Grid>
          <Grid item xl={12} xs={12}>
            <Paper elevation={0} className={classes.copyright}>
              Copyright © 2021. All Rights Reserved.This is the official website of Goa Tourism Department, Govt of Goa.
            </Paper>
          </Grid>

        </div>
      </footer>

    </div>
  );
}