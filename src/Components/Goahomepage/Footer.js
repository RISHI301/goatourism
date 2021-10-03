import React from 'react';
import TextButtons5 from './Terms&Conditions';
import TextButtons6 from './Disclaimer';
import TextButtons7 from './PrivacyPolicies';
import TextButtons8 from './HyperlinkingPolicies';
import TextButtons9 from './Help';
import ButtonLink5 from './CallUs';
import ButtonLink6 from './Email';
import ContainedButtons1 from './YoutubeIcon';
import ContainedButtons2 from './TwitterIcon';
import ContainedButtons3 from './FacebookIcon';
import ContainedButtons4 from './InstaIcon';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

export default function AppFooter() {
  return (
    <div className="root">
        
      <footer className="App-footer">
        <div className="flexbox-container">
        <Paper elevation={0}>
              Policies
            </Paper>
            <TextButtons5/>
            <TextButtons6/>
            <TextButtons7/>
            <TextButtons8/>
            <TextButtons9/>
            <Paper elevation={0}>
              Contact Us
              </Paper>
              <Paper elevation={0}>
              Goa Tourism Department
              </Paper>
              <Paper elevation={0}>
              Paryatan Bhavan, 2nd Floor, Patto
              </Paper>
              <Paper elevation={0}>
              Panaji-Goa, India 403001
              </Paper>
            
            <p>
            <ButtonLink5/>
            </p>
            <p>
            <ButtonLink6/>
            </p>
            <Grid container spacing={1}>
            <Grid item xl= {3} xs={3}>
            <ContainedButtons1/>
            </Grid>
            <Grid item xl= {3} xs={3}>
            <ContainedButtons2/>
            </Grid>
            <Grid item xl= {3} xs={3}>
            <ContainedButtons3/>
            </Grid>
            <Grid item xl= {3} xs={3}>
            <ContainedButtons4/>
            </Grid>
            </Grid>
            <Paper elevation={0}>
            Copyright © 2021. All Rights Reserved.This is the official website of Goa Tourism Department, Govt of Goa.
            </Paper>
         

        </div>
      </footer>

    </div>
  );
}