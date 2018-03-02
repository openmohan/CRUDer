import React from 'react';
import {login_action} from 'actions/actions.js';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class loginPage extends React.Component{
  constructor(props){
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
  }
  submitHandler(){
    this.props.onLoginClick('m@m.com','myPass');
  }
  render(){
    if(this.props.state.user.token){
      return <Redirect to='/home' />;
    }
    return(
      <div>
        <label> E-Mail : <input type='text' placeholder='Please enter your E-Mail ID' /> </label>
        <label> Password: <input type='password' placeholder='Password goes here' /> </label>
        <input type='submit' onClick={this.submitHandler} value={this.props.state.appDetails.isLoggingIn ? 'Loading' : 'Login'}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    'state': state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginClick: (mail,pass) => {
      dispatch(login_action(mail,pass));
    }
  };
};



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(loginPage);
