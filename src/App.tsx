import React from 'react';
import logo from '../src/logo.png';
import LaunchContainer from './components/Launch';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LaunchInfoContainer from './components/LaunchInfo';

function App() {
  return (
    <Router>
      <div className="App">
        <img
          src={logo}
          alt="spaceX"
          style={{ width: 300, display: 'block', margin: 'auto' }}
        />
        <Switch>
          <Route exact path="/" component={LaunchContainer} />
          <Route
            exact
            path="/launch/:flight_number"
            component={LaunchInfoContainer}
          />
          <Route path="/" render={() => <h2>Page Doesn't exist</h2>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
