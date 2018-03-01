import React from 'react';
import {login_action} from 'actions/actions.js';
import { connect } from 'react-redux';


class loginPage extends React.Component{
  constructor(props){
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
  }
  submitHandler(){
    this.props.onLoginClick();
  }
  render(){
    return(
      <div>
        <label> E-Mail : <input type="text" placeholder="Please enter your E-Mail ID" /> </label>
        <label> Password: <input type="password" placeholder="Password goes here" /> </label>
        <input type="submit" onClick={this.submitHandler} value="Login"/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    'user': state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginClick: () => {
      dispatch(login_action('hi'));
    }
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(loginPage);
