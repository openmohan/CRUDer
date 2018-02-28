import React from 'react';
import loginPage from 'components/loginPage'

class App extends React.Component{
  render(){
    return(
      <div>
      {this.props.children}
      </div>
    );
  }
}

export default App;
