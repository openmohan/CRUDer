import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class MainChild extends React.Component{
  render(){
    // if(!this.props.user.isLoggedIn){
    //   return <Redirect to="/login" />;
    // }
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

const mapStateToProps = (state) => {
  return {
    'user': state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainChild);
