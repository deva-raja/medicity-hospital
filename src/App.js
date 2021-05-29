import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/style.css';
import AppointmentPage from './pages/AppointmentPage';
import ContactPage from './pages/ContactPage';
import CovidPage from './pages/CovidPage';
import LandingPage from './pages/LandingPage';
import LocationPage from './pages/LocationPage';
import LoginPage from './pages/LoginPage';
import PersonelPage from './pages/PersonelPage';
import DoctorPage from './pages/DoctorPage';

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
          <Route path='/login' component={LoginPage} />
          <Route path='/doctor' component={DoctorPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
