const request = require('superagent');
import {LOGIN,LOGINPROGRESS,GETHOMEDATA,TOKENEXPIRED,RESIGNIN,GETDASHBOARDDATA} from 'actions/CONSTANT_KEYS.js';
import {cookies} from 'reducers/reducer.js';


export var getDashboardData = () => (dispatch) => {
  if(!cookies.get('usertoken')){
    return;
  }
  request
    .post('http://0.0.0.0:8081/v1/access_token')
    .send({ 'accesstoken': cookies.get('usertoken')}) // sends a JSON post body
    .end((err, res) => {
      if(res.status == 404){
        dispatch({
          type  : TOKENEXPIRED,
          data : "expired"
        })
        cookies.set('usertoken' , false);
        dispatch({
          type : RESIGNIN,
          data : "expired"
        })
        return
      }
      dispatch(
        {
          type :  GETDASHBOARDDATA,
          data : res.body
        }
      );
    });
};

export var getHomeData = () => (dispatch) => {
  if(!cookies.get('usertoken')){
    return;
  }
  request
    .post('http://0.0.0.0:8081/v1/access_token')
    .send({ 'accesstoken': cookies.get('usertoken')}) // sends a JSON post body
    .end((err, res) => {
      if(res.status == 404){
        dispatch({
          type  : TOKENEXPIRED,
          data : "expired"
        })
        cookies.set('usertoken' , false);
        dispatch({
          type : RESIGNIN,
          data : "expired"
        })
        return
      }
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
      console.log(res.status)
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
