import React from 'react';
import MainChild from './MainChild.js';

class Layout extends React.Component{
  render(){

    return(
      <div>
      <div>
      Header
      </div>
      <div>
        <MainChild/>
      </div>
      <div>
      Footer
      </div>
      </div>
    );
  }
}

export default Layout;
