import React from 'react';

class loginPage extends React.Component{
  render(){
    return(
      <div>
        <label> E-Mail : <input type="text" placeholder="Please enter your E-Mail ID" /> </label>
        <label> Password: <input type="password" placeholder="Password goes here" /> </label>
        <input type="submit" value="Login"/>
      </div>
    );
  }
}

export default loginPage;
