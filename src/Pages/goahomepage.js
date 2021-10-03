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

export default function Goahomepage() {
 
  return (
    
    <React.Fragment>
        <Container fixed>
        <Paper elevation={0}>
        <Grid item xl={12} xs={12}>
        <img src = {govtgoalogo} className= "Government of Goa" alt= "Government of Goa" />
        </Grid>
            Department of Tourism Goa
            </Paper>
          <Paper elevation={0}>
            Government of Goa
            </Paper>
          <SwipeableTextMobileStepper/>
          <Paper elevation={0}>
            Welcome to Goa Tourism Department
          <Grid item xl={12} xs={12}>
          <img src = {goadepartment} className= "Goa-Tourism-Department" alt= "Goa-Tourism-Department"width="70%" height="70%"/>
          </Grid>
          <Grid item xl={12} xs={12}>
          The Administrative head of the Department is Shri J. Ashok Kumar, IAS, Secretary Tourism. The Department has a zonal office in North Goa at Headquarters, Panaji and in South Goa at Margao.
          The Current Director of Tourism is Shri Menino D’souza.
          The Public Grievances Officer is Dy. Director (Administration).
          The Tourist Information Centres/Counters are located within the State and in Mumbai (temporarily closed). The Zonal Officers are primarily responsible for monitoring the Registration of Tourist Trade under the Tourist Trade Act, 1982.
          </Grid>
          </Paper>
          <ButtonLink1/>
          <Paper elevation={0}>
            Travel Essentials
            </Paper>
            
          <TextMobileStepper/>
          
          
          <Grid item xl={12} xs={12}>
          <OutlinedButtons6/>
          </Grid>
          <Grid item xl={12} xs={12}>
          <OutlinedButtons7/>
          </Grid>
          <Grid item xl={12} xs={12}>
          <OutlinedButtons8/>
          </Grid>
        
          <Paper elevation={0}>
            A Glimpse into the Beauty of Goa
            <Grid item xl={12} xs={12}>
            <img src = {video} className= "Glimpse of Goa" alt= "Glimpse into the Beauty of Goa" width="70%" height="70%"/>
            </Grid>
            </Paper>
            
        </Container>
    </React.Fragment>
    
  );
}