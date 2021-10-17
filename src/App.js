import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchAppBar from './Components/AppBarSearch';
import Goahomepage from './Pages/goahomepage';
import Covidguide from './Pages/covidguide';
// import SimpleAccordion from './Components/Goahomepage/Languages';
import TextButtons4 from './Components/Goahomepage/ContactUs';
import AppFooter from './Components/Goahomepage/Footer';
import { Grid } from '@material-ui/core';
import SimpleMenu01 from './Components/Goahomepage/Language';


function App() {
  return (
    <div className="App">
      {/* Header (Navigation Bar) */}
      <header className="App-header">
        <Grid container spacing={1}>
        <Grid item xl={6} xs={6}>
        <TextButtons4 />
        </Grid>
        <Grid item xl={6} xs={6}>
        <SimpleMenu01/>
        </Grid>
        </Grid>
        {/* <SimpleAccordion /> */}
        <SearchAppBar />
      </header>

      {/* Router - Pages */}
      <Switch>
        <Route path={process.env.PUBLIC_URL + '/'} exact > <Goahomepage /> </Route>
        {/*<Route path={process.env.PUBLIC_URL + '/home'} > <Home/> </Route>
            <Route path={process.env.PUBLIC_URL + '/hotel'} > <Hotel/> </Route>
  <Route path={process.env.PUBLIC_URL + '/gallery'}  > <Gallery/> </Route> */}
        <Route path={process.env.PUBLIC_URL + '/goahomepage'}  > <Goahomepage /> </Route> // Homepage of our website
        <Route path={process.env.PUBLIC_URL + '/covidguide'}  > <Covidguide /> </Route> // Second page of the task
      </Switch>
      <AppFooter />
    </div>
  );

}

export default App;
