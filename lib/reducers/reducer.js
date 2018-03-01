import {LOGIN} from 'actions/CONSTANT_KEYS.js';

const initialState = {
  'isLoggedIn' : false,
  'name' : 'Guest'
};

function myApp(state , action) {
  if(typeof state == 'undefined'){
    return initialState;
  }
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, ...state , action.data);


    default:
      return initialState;

  }
}


export default myApp;
