import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { AccruedRights, Retirees, Deceased } from "./pages/AccruedRights";
import PensionIncrease from "./pages/PensionIncrease";
import Report1 from "./pages/Report1";
import logo from "./images/favicon.ico";

function App() {
  return (
    <Router>
      <Sidebar />
      <img src={logo} alt="myLogo" className="img-bg"></img>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/accrued-rights" exact component={AccruedRights} />
        <Route path="/accrued-rights/retirees" exact component={Retirees} />
        <Route path="/accrued-rights/deceased" exact component={Deceased} />
        <Route
          path="/accrued-rights/pension-increase"
          exact
          component={PensionIncrease}
        />
        <Route path="/reports/consolidated-paid" exact component={Report1} />
      </Switch>
    </Router>
  );
}

export default App;
