import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {getDashboardData} from 'actions/actions.js';
var _ = require('lodash');

class Dashboard extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.getDashboardData();
  }
  render(){
    if(!this.props.state.user.token ){
      return <Redirect to='/login' />;
    }
    return(
      <div>
        {_.get(this.props , 'state.dashboard.result','')}
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
    getDashboardData : () => {
      dispatch(getDashboardData());
    }
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
