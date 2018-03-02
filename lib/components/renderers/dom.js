import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import MyApp from 'reducers/reducer.js';


import RequireAuth from 'components/RequireAuth.js';

import App from 'components/App.js';
import login from 'components/loginPage.js';
import registration from 'components/registrationPage.js';
import Home from 'components/HomeComponents/Home.js';
import Dashboard from 'components/HomeComponents/Dashboard.js';
import Settings from 'components/HomeComponents/Settings.js';

let store = createStore(
  MyApp,applyMiddleware(thunk)
);


ReactDOM.render(
  (<Provider store={store}>
    <Router>
      <div className="container">
        <App>
          <Route exact path="/" component={RequireAuth(Home)}/>
          <Route path="/home" component={RequireAuth(Home)} />
          <Route path="/dashboard" component={RequireAuth(Dashboard)} />
          <Route path="/settings" component={RequireAuth(Settings)} />
          <Route  path="/login" component={login} />
          <Route  path="/register" component={registration} />
        </App>
      </div>
    </Router>
  </Provider>)
  ,document.getElementById('root'));
