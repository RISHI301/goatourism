import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchAppBar from './Components/AppBarSearch';
import Goahomepage from './Pages/goahomepage';
import Covidguide from './Pages/covidguide';
import TextButtons4 from './Components/Goahomepage/ContactUs';
import AppFooter from './Components/Goahomepage/Footer';
import { Grid } from '@material-ui/core';
import SimpleMenu01 from './Components/Goahomepage/Language';
import BasicButtonGroup from './Components/Goahomepage/DesktopMenu';
import Header from './Components/Goahomepage/header';
import Hidden from '@material-ui/core/Hidden';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Grid container spacing={1}>
          <Grid item xl={11} xs={9}>
            <TextButtons4 />
          </Grid>
          <Grid item xl={1} xs={3}>
            <SimpleMenu01 />
          </Grid>
        </Grid>
      </header>
      <Hidden smUp> <Grid item xs={12}>
        <SearchAppBar />
      </Grid> </Hidden>
      <Hidden mdDown> <Grid item lg={12}>
        <Header />
      </Grid> </Hidden>
      <Hidden mdDown> <Grid item lg={12}>
        <BasicButtonGroup />
      </Grid> </Hidden>

      <Switch>
        <Route path={process.env.PUBLIC_URL + '/'} exact > <Goahomepage /> </Route>
        <Route path={process.env.PUBLIC_URL + '/goahomepage'}  > <Goahomepage /> </Route> // Homepage of our website
        <Route path={process.env.PUBLIC_URL + '/covidguide'}  > <Covidguide /> </Route> // Second page of the task
      </Switch>
      <AppFooter />
    </div>
  );

}

export default App;
