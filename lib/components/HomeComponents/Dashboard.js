import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {getDashboardData} from 'actions/actions.js';
var _ = require('lodash');

import RequireAuth from 'components/RequireAuth.js';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Settings from 'components/HomeComponents/Settings.js';


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
    console.log(this.props.match)
    return(
      <div>
        {_.get(this.props , 'state.dashboard.result','')}
        <Route path={this.props.match.path+'/settings'} component={(Settings)} />
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
