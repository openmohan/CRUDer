import React from 'react';
import { connect } from 'react-redux';
import {getHomeData} from 'actions/actions.js';
var _ = require('lodash');

class Home extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.getHomeData();
  }
  render(){
    return(
      <div>
        {_.get(this.props , 'state.homedata.result','')}
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
