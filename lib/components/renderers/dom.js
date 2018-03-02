import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import MyApp from 'reducers/reducer.js';


import App from 'components/App.js';
import login from 'components/loginPage.js';
import registration from 'components/registrationPage.js';
import Layout from 'components/Layout.js';
import Home from 'components/HomeComponents/Home.js';
import Dashboard from 'components/HomeComponents/Dashboard.js';

let store = createStore(
  MyApp,applyMiddleware(thunk)
);


ReactDOM.render(
  (<Provider store={store}>
    <Router>
      <div className="container">
        <App>
          <Route exact path="/" component={Home}/>
          <Route path="/home" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route  path="/login" component={login} />
          <Route  path="/register" component={registration} />
        </App>
      </div>
    </Router>
  </Provider>)
  ,document.getElementById('root'));
