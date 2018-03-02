import React from 'react';
import { connect } from 'react-redux';


class MainChild extends React.Component{
  render(){
    return(
      <div>
        {this.props.children}
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
