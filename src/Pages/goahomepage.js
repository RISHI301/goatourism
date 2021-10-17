import React from 'react';
import Container from '@material-ui/core/Container'
import SwipeableTextMobileStepper from '../Components/Goahomepage/Stepper';
import TextMobileStepper from '../Components/Goahomepage/Stepper2';
import OutlinedButtons6 from '../Components/Goahomepage/Button6';
import OutlinedButtons7 from '../Components/Goahomepage/Button7';
import OutlinedButtons8 from '../Components/Goahomepage/Button8';
import goadepartment from '../Assets/goadepartment.jpg';
import video from '../Assets/video.jpg';
import govtgoalogo from '../Assets/govtgoalogo.png';
import ButtonLink1 from '../Components/Goahomepage/LinkButton1';
import { Grid } from '@material-ui/core';
import { Paper, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }, 
  heading: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 1,
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 15,
    margin: 10,
  },
  para: {
    margin: 10
  },
  sub: {
    margin: 10,
    fontWeight: 'bold',
    fontSize: 15,
  },
  video: {
    fontWeight: 'bold',
    fontSize: 15,
    margin: 10,
  },
}));

export default function Goahomepage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <React.Fragment>
      <Container fixed>
        <Paper elevation={0} className={classes.heading}>
          <Grid item xl={12} xs={12}>
            <img src={govtgoalogo} className="Government of Goa" alt="Government of Goa" width="100" height="100%" />
          </Grid>
          Department of Tourism Goa
        </Paper>
        <Paper elevation={0}>
          Government of Goa
        </Paper>
        <SwipeableTextMobileStepper />
        <Paper elevation={0} className={classes.subtitle}>
          Welcome to Goa Tourism Department
          </Paper>
          <Grid item xl={12} xs={12}>
            <img src={goadepartment} className="Goa-Tourism-Department" alt="Goa-Tourism-Department" width="70%" height="70%" />
          </Grid>
          <Grid item xl={12} xs={12}>
          <Paper elevation={0} className={classes.para}>
            The Administrative head of the Department is Shri J. Ashok Kumar, IAS, Secretary Tourism. The Department has a zonal office in North Goa at Headquarters, Panaji and in South Goa at Margao.
            The Current Director of Tourism is Shri Menino D’souza.
            The Public Grievances Officer is Dy. Director (Administration).
            The Tourist Information Centres/Counters are located within the State and in Mumbai (temporarily closed). The Zonal Officers are primarily responsible for monitoring the Registration of Tourist Trade under the Tourist Trade Act, 1982.
          </Paper>
          </Grid>
        <ButtonLink1 />
        <Paper elevation={0} className={classes.sub}>
          Travel Essentials
        </Paper>

        <TextMobileStepper />

        <Grid item xl={12} xs={12}>
          <OutlinedButtons6 />
        </Grid>
        <Grid item xl={12} xs={12}>
          <OutlinedButtons7 />
        </Grid>
        <Grid item xl={12} xs={12}>
          <OutlinedButtons8 />
        </Grid>

        <Paper elevation={0} className={classes.video}>
          A Glimpse into the Beauty of Goa
          </Paper>
          <Grid item xl={12} xs={12}>
            <img src={video} className="GlimpseofGoa" alt="Glimpse into the Beauty of Goa" width="70%" height="70%" />
          </Grid>

      </Container>
    </React.Fragment>
    </div>
  );
}