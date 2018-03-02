import React from 'react';

class App extends React.Component{
  render(){
    return(
      <div>
        <div>
          Header
        </div>
        <div>
          {this.props.children}
        </div>
        <div>
          Footer
        </div>
      </div>
    );
  }
}

export default App;
