import './App.css';
import { Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import LandingPage from './pages/LandingPage/LandingPage';
import Game from './pages/Game/Game';
import Create from './pages/Create/Create';


//aca van las rutas
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/videogame/:id" component={Game} />
      <Route exact path="/create" component={Create} />


    </div>
  );
}

export default App;
