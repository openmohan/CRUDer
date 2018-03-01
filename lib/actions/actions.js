import {LOGIN} from 'actions/CONSTANT_KEYS.js';

export var login_action = () => {
  return {
    type :  LOGIN,
    data : {
      'isLoggedIn' : true,
      'name' : 'User1'
    }
  };
};

export var register_action = () => {
  console.log(this);
};
