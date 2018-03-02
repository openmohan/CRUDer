import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {getHomeData} from 'actions/actions.js';

class Home extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.getHomeData();
  }
  render(){
    if(!this.props.state.user.token ){
      return <Redirect to='/login' />;
    }
    return(
      <div>
        {this.props.state.homedata.result}
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
    getHomeData : () => {
      dispatch(getHomeData());
    }
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
