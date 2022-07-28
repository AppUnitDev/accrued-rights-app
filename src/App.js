import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { AccruedRights, Retirees, Deceased } from './pages/AccruedRights';
import PensionIncrease from './pages/PensionIncrease';
import Report1 from './pages/Report1';
import logo from './images/favicon.ico';
import { Helmet } from 'react-helmet';
import MaintainPencomUsers from './pages/MaintainPencomUsers';
import PFASubmission from './pages/PFASubmission';
import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import Report3 from './pages/Report3';
import Report4 from './pages/Report4';
import UserForm from './PfaModule/UserForm';

const theme = createTheme({
  palette: {
    primary: {
      main: '#333996',
      light: '#3c44b126',
    },
    background: {
      default: '#f4f5fd',
    },
    shape: {
      borderRadius: '12px',
    },
  },
});

function App() {
  return (
    <Router>
      <Sidebar />
      <Helmet>
        <style>{"body { background-color: lightgrey; }"}</style>
      </Helmet>
      <img
        src={logo}
        width={250}
        height={250}
        alt="myLogo"
        className="img-bg"
      ></img>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/accrued-rights/retirees" exact component={Retirees} />
        <Route path="/accrued-rights/deceased" exact component={Deceased} />
        <Route
          path="/death-benefit/pfa-submissions"
          exact
          component={UserForm}
        />
        <Route
          path="/death-benefit/pfa-validation"
          exact
          component={PFASubmission}
        />
        <Route
          path="/accrued-rights/pension-increase"
          exact
          component={PensionIncrease}
        />
        <Route path="/reports/consolidated-paid" exact component={Report1} />
        {/* <Route
          path="/reports/consolidated-accrued-rights"
          exact
          component={Report2}
        /> */}
        <Route
          path="/reports/accrued-rights-paid-per-pfa"
          exact
          component={Report3}
        />
        <Route
          path="/reports/pension-increase-paid-per-pfa"
          exact
          component={Report4}
        />
        <Route
          path="/maintainpencomusers"
          exact
          component={MaintainPencomUsers}
        />
      </Switch>
    </Router>
  );
}

export default App;
