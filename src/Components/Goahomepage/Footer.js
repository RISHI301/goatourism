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
import { makeStyles} from '@material-ui/styles';
import Youtube from '../../Assets/Youtube.svg'
import Twitter from '../../Assets/Twitter.svg'
import Facebook from '../../Assets/Facebook.svg'
import Insta from '../../Assets/Insta.svg'

const useStyles = makeStyles((theme) => ({
  header: {
    fontWeight: 'bold',
    margin: 10,
    backgroundColor: '#999999',
    fontSize: 20,
  },
  para: {
    backgroundColor: '#999999',
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
            <img src={Youtube} className="Icon" alt="Icon"/>
            </Grid>
            <Grid item xl={3} xs={3}>
            <img src={Twitter} className="Icon" alt="Icon"/>
            </Grid>
            <Grid item xl={3} xs={3}>
            <img src={Facebook} className="Icon" alt="Icon"/>
            </Grid>
            <Grid item xl={3} xs={3}>
            <img src={Insta} className="Icon" alt="Icon"/>
            </Grid>
          </Grid>
          <Paper elevation={0} className={classes.para}>
            Copyright © 2021. All Rights Reserved.This is the official website of Goa Tourism Department, Govt of Goa.
          </Paper>


        </div>
      </footer>

    </div>
  );
}