import React from 'react';

class registrationPage extends React.Component{
  render(){
    return(
      <div>
        <label> E-Mail : <input type="text" placeholder="Please enter your EMail ID" /> </label>
        <label> Password: <input type="password" placeholder="Password goes here" /> </label>
        <label> Password: <input type="password" placeholder="Re enter the password" /> </label>
        <input type="submit" value="Register"/>
      </div>
    );
  }
}

export default registrationPage;
