import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as authActions from '../../actions/auth';

class Logout extends Component {
  componentWillMount() {
    this.props.logoutUser();
  }

  render() {
    return (
      <div>Sorry to see you go!</div>
    );
  }
}

export default connect(null, authActions)(Logout);
