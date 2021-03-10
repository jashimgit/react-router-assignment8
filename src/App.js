import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home/Home';
import Nomatch from './components/Nomatch/Nomatch';
import TeamDetails from './components/TeamDetails/TeamDetails';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/team/:teamId">
            <TeamDetails></TeamDetails>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <Nomatch></Nomatch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
