import './css/style.css';
import LandingPage from './pages/LadingPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PersonelPage from './pages/PersonelPage';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/personel' component={PersonelPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
