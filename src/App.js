import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchAppBar from './Components/AppBarSearch';
import Goahomepage from './Pages/goahomepage';
import Covidguide from './Pages/covidguide';


function App() {
  return (
    <div className="App">
      {/* Header (Navigation Bar) */}
      <header className="App-header">
      <SearchAppBar/>
      </header>
      
      {/* Router - Pages */}
          <Switch>
            {/*<Route path={process.env.PUBLIC_URL + '/'} exact > <Home/> </Route>
            <Route path={process.env.PUBLIC_URL + '/home'} > <Home/> </Route>
            <Route path={process.env.PUBLIC_URL + '/hotel'} > <Hotel/> </Route>
  <Route path={process.env.PUBLIC_URL + '/gallery'}  > <Gallery/> </Route> */}
            <Route path={process.env.PUBLIC_URL + '/goahomepage'}  > <Goahomepage/> </Route> // Homepage of our website
            <Route path={process.env.PUBLIC_URL + '/covidguide'}  > <Covidguide/> </Route> // Second page of the task
          </Switch>
    </div>
  );
  }

export default App;
