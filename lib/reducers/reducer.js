import {LOGIN,LOGINPROGRESS,GETHOMEDATA,TOKENEXPIRED,RESIGNIN,GETDASHBOARDDATA} from 'actions/CONSTANT_KEYS.js';
import Cookies from 'universal-cookie';

export const cookies = new Cookies();

const initialState = {
  'isLoggedIn' : cookies.get('usertoken') ? true : false,
  'appDetails' : {
    'isLoggingIn' : false
  },
  'user' : {
    'name' : 'guest',
    'token' :  cookies.get('usertoken') ? true : false,
  },
  'homedata':{
    'result' : ''
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
      return Object.assign({}, state , {'user':action.data});
    case LOGINPROGRESS:
      return Object.assign({} , state , {'appDetails':{'isLoggingIn':action.data}});
    case GETHOMEDATA:
      return Object.assign({} , state , {'homedata':action.data});
    case GETDASHBOARDDATA:
      var myObj = {...state , "dashboard":action.data }
      return  myObj ;
    case RESIGNIN :
      return Object.assign({} ,state , {'user':{'token':'','name':'guest'}})
    default:
      return initialState;

  }
}


export default myApp;
