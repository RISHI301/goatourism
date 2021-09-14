import './App.css';
import ButtonAppBar from './Components/AppBar.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home.js'
import Gallery from './Pages/Gallery.js'
import PrimarySearchAppBar from './Components/AppBarSearch';
import Hotel from './Pages/Hotel';
import SimpleCard from './Components/HomeMultiCard';
import Goahomepage from './Pages/goahomepage';
import Covidguide from './Pages/covidguide';


function App() {
  return (
    <div className="App">
      {/* Header (Navigation Bar) */}
      <header className="App-header">
      <PrimarySearchAppBar/>
      </header>
      
      {/* Router - Pages */}
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/'} exact > <Home/> </Route>
            <Route path={process.env.PUBLIC_URL + '/home'} > <Home/> </Route>
            <Route path={process.env.PUBLIC_URL + '/hotel'} > <Hotel/> </Route>
            <Route path={process.env.PUBLIC_URL + '/gallery'}  > <Gallery/> </Route>
            <Route path={process.env.PUBLIC_URL + '/goahomepage'}  > <Goahomepage/> </Route>
            <Route path={process.env.PUBLIC_URL + '/covidguide'}  > <Covidguide/> </Route>
          </Switch>
    </div>
  );
  }

export default App;
