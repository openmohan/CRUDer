import {makeAuthCall} from 'actions/actions.js';
import React from 'react';
import { Redirect } from 'react-router-dom';

const RequireAuth = (Component) => {
  return class  App extends Component{
    state = {
      'isAuthenticated' : false,
      'isLoading' : true
    }
    componentDidMount(){
      makeAuthCall(
        () => {
          this.setState({isAuthenticated: true, isLoading: false});
        },
        () => {
          this.setState({isLoading: false});
          return <Redirect to="/login" />;
        }
      );
    }
    render() {
      const { isAuthenticated, isLoading } = this.state;
      if(isLoading) {
        return <div>Loading...</div>;
      }
      if(!isAuthenticated) {
        return <Redirect to="/login" />;
      }
      return <Component {...this.props} />;
    }
  };
};

export default RequireAuth;
