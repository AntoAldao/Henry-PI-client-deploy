import './App.css';
import { Route,Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import LandingPage from './pages/LandingPage/LandingPage';
import Game from './pages/Game/Game';
import Create from './pages/Create/Create';
import axios from 'axios';
import notFound from './pages/NotFound/NotFound';
axios.defaults.baseURL = 'https://henry-pi-production.up.railway.app/api/';


//aca van las rutas
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/videogame/:id" component={Game} />
        <Route exact path="/create" component={Create} />
        <Route component={notFound} />
      </Switch>


    </div>
  );
}

export default App;