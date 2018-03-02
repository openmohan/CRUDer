const request = require('superagent');
import {LOGIN,LOGINPROGRESS,GETHOMEDATA,TOKENEXPIRED,RESIGNIN,GETDASHBOARDDATA} from 'actions/CONSTANT_KEYS.js';
import {cookies} from 'reducers/reducer.js';

export var makeAuthCall = (success,failure) => {
  if(!cookies.get('usertoken')){
    failure();
    return;
  }
  request
    .post('http://0.0.0.0:8081/v1/access_token')
    .send({ 'accesstoken': cookies.get('usertoken')}) // sends a JSON post body
    .end((err, res) => {
      if(res.status == 404){
        failure();
        cookies.set('usertoken',false)
      }
      if(res.status == 200){
        success();
      }
    });
};

export var getDashboardData = () => (dispatch) => {

  request
    .post('http://0.0.0.0:8081/v1/access_token')
    .send({ 'accesstoken': cookies.get('usertoken')}) // sends a JSON post body
    .end((err, res) => {
      dispatch(
        {
          type :  GETDASHBOARDDATA,
          data : res.body
        }
      );
    });
};

export var getHomeData = () => (dispatch) => {
  request
    .post('http://0.0.0.0:8081/v1/access_token')
    .send({ 'accesstoken': cookies.get('usertoken')}) // sends a JSON post body
    .end((err, res) => {
      dispatch(
        {
          type :  GETHOMEDATA,
          data : res.body
        }
      );
    });
};

export var login_action = (username, password) => (dispatch) =>{
  dispatch(loggingIn(true));
  request
    .post('http://0.0.0.0:8081/v1/login')
    .send({ email: username, password: password }) // sends a JSON post body
    .end((err, res) => {
      cookieBuilder('user',res.body);
      dispatch(loggingIn(false));
      dispatch(
        {
          type :  LOGIN,
          data : res.body
        }
      );
    });
};

export var loggingIn = (flag) => {
  return({
    type : LOGINPROGRESS,
    data : flag
  });
};

var cookieBuilder = (key , data) => {
  switch (key) {
    case 'user':
      cookies.set('usertoken', data.token, { path: '/' });
      break;
    default:

  }
};

export var register_action = () => {

};
