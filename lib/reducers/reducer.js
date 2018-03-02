import {LOGIN,LOGINPROGRESS} from 'actions/CONSTANT_KEYS.js';

const initialState = {
  'isLoggedIn' : false,
  'appDetails' : {
    'isLoggingIn' : false
  },
  "user" : {
    "name" : "guest"
  }
};

function myApp(state , action) {
  // console.log(state)
  if(typeof state == 'undefined'){
    return initialState;
  }
  switch (action.type) {
    case LOGIN:
    // console.log(action.data)
      return Object.assign({}, state , {"user":action.data});
    case LOGINPROGRESS:
    console.log(state)
      return Object.assign({} , state , {"appDetails":{"isLoggingIn":action.data}})
    default:
      return initialState;

  }
}


export default myApp;
