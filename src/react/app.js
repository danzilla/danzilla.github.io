'use strict';
import React from "react";
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
// React components
import Test from './containers/_test';
import Dashboard from './containers/Dashboard';
// Features
const Features = (props) => {
  return (
    <Router>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/test" exact component={Test} />
          <Redirect from='*' to='/' />
        </Switch>
    </Router>
  );
}
// Export
export default Features;