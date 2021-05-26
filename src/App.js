import './css/style.css';
import LandingPage from './pages/LadingPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PersonelPage from './pages/PersonelPage';
import LocationPage from './pages/LocationPage';
import ContactPage from './pages/ContactPage';
import CovidPage from './pages/CovidPage';
import AppointmentPage from './pages/AppointmentPage';
import { toast } from 'react-toastify';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/covid' component={CovidPage} />
          <Route path='/personel' component={PersonelPage} />
          <Route path='/locations' component={LocationPage} />
          <Route path='/contact' component={ContactPage} />
          <Route path='/appointment' component={AppointmentPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
