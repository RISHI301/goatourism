import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/styles';
import OutlinedButtons1 from '../Components/Goahomepage/Circular1';
import OutlinedButtons2 from '../Components/Goahomepage/Circular2';
import OutlinedButtons3 from '../Components/Goahomepage/Circular3';
import OutlinedButtons4 from '../Components/Goahomepage/Circular4';
import OutlinedButtons5 from '../Components/Goahomepage/Circular5';

const useStyles = makeStyles((theme) => ({
  heading: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 10,
  }    
}));


export default function Covidguide() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container fixed>
        <Paper elevation={0} className={classes.heading}>
          Official Government Circulars
        </Paper>
        <OutlinedButtons1 />
        <OutlinedButtons2 />
        <OutlinedButtons3 />
        <OutlinedButtons4 />
        <OutlinedButtons5 />
      </Container>
    </React.Fragment>
  );
}