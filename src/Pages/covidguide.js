import React from 'react';
import Container from '@material-ui/core/Container';
import PrimarySearchAppBar from '../Components/AppBarSearch';
import MaterialUIPickers from '../Components/Datepicker1';
import OutlinedButtons1 from '../Components/Goahomepage/Circular1';
import OutlinedButtons2 from '../Components/Goahomepage/Circular2';
import OutlinedButtons3 from '../Components/Goahomepage/Circular3';
import OutlinedButtons4 from '../Components/Goahomepage/Circular4';
import OutlinedButtons5 from '../Components/Goahomepage/Circular5';

export default function Covidguide() {
  return (
    <React.Fragment>
      <Container fixed>
      <p>
          Official Government Circulars
        </p>
        <OutlinedButtons1/>
        <OutlinedButtons2/>
        <OutlinedButtons3/>
        <OutlinedButtons4/>
        <OutlinedButtons5/>
      </Container>
    </React.Fragment>
  );
}