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
import { Hidden } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: '100%',
    margin: 1,
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: '110%',
    margin: 10,
  },
  para: {
    margin: 5,
  },
  sub: {
    margin: 10,
    fontWeight: 'bold',
    fontSize: '110%',
  },
  video: {
    fontWeight: 'bold',
    fontSize: '110%',
    margin: 10,
  },
  stepper: {
    display: 'flex',
    justifyContent: 'center'
  }
}));

export default function Goahomepage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <React.Fragment>
        <Container fixed>
          <Hidden smUp>
            <Paper elevation={0} className={classes.heading}>
              <Grid item xs={12}>
                <img src={govtgoalogo} className="Government of Goa" alt="Government of Goa" width="100" height="100%" />
              </Grid>
              Department of Tourism Goa
            </Paper>
            <Paper elevation={0}>
              Government of Goa
            </Paper>
          </Hidden>

          <SwipeableTextMobileStepper />
          <Paper elevation={0} className={classes.subtitle}>
            Welcome to Goa Tourism Department
          </Paper>
          <Grid item xl={12} xs={12}>
            <img src={goadepartment} className="Goa-Tourism-Department" alt="Goa-Tourism-Department" width="70%" height="70%" />
          </Grid>
          <Grid item xl={12} xs={12}>
            <Paper elevation={0} className={classes.para}>
              The Administrative head of the Department is Shri J. Ashok Kumar, IAS, Secretary Tourism.
            </Paper>
            <Paper elevation={0} className={classes.para}>
              The Department has a zonal office in North Goa at Headquarters, Panaji and in South Goa at Margao.
            </Paper>
            <Paper elevation={0} className={classes.para}>
              The Current Director of Tourism is Shri Menino D’souza.
            </Paper>
            <Paper elevation={0} className={classes.para}>
              The Public Grievances Officer is Dy. Director (Administration).
            </Paper>
            <Paper elevation={0} className={classes.para}>
              The Tourist Information Centres/Counters are located within the State and in Mumbai (temporarily closed). The Zonal Officers are primarily responsible for monitoring the Registration of Tourist Trade under the Tourist Trade Act, 1982.
            </Paper>
          </Grid>
          <ButtonLink1 />
          <Paper elevation={0} className={classes.sub}>
            Travel Essentials
          </Paper>
          <Grid container spacing={1}>
            <Grid item xl={12} xs={12}>
              <Paper elevation={0} className={classes.stepper}>
                <TextMobileStepper />
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={0.5}>
            <Grid item xl={12} xs={12}>
              <OutlinedButtons6 />
            </Grid>
            <Grid item xl={12} xs={12}>
              <OutlinedButtons7 />
            </Grid>
            <Grid item xl={12} xs={12}>
              <OutlinedButtons8 />
            </Grid>
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