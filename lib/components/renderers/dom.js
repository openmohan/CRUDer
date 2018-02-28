import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import App from 'components/App.js';
import login from 'components/loginPage.js';
import registration from 'components/registrationPage.js';


ReactDOM.render(
  (  <Router>
    <div className="container">
        <App>
              <Route exact path="/" component={registration} />
              <Route  path="/login" component={login} />
              <Route  path="/register" component={registration} />
        </App>
  </div>
  </Router>)
  ,document.getElementById('root'));
