const request = require('superagent');
import {browserHistory } from 'react-router'
import {LOGIN,LOGINPROGRESS} from 'actions/CONSTANT_KEYS.js';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

export var login_action = (username, password) => (dispatch) =>{
  dispatch(loggingIn(true));

  request
    .post('http://0.0.0.0:8081/v1/login')
    .send({ email: username, password: password }) // sends a JSON post body
    .end((err, res) => {
      dispatch(loggingIn(false))
      dispatch(
         {
          type :  LOGIN,
          data : res.body
        }
      );
    });
  // return {
  //   type :  LOGIN,
  //   data : {
  //     'isLoggedIn' : true,
  //     'name' : 'User1'
  //   }
  // };
};

export var loggingIn = (flag) => {
  return({
    type : LOGINPROGRESS,
    data : flag
  })
}

export var register_action = () => {
  console.log(this);
};
