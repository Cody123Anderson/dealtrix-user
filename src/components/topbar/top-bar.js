import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import './top-bar.scss';
import { openAuthModal, logoutUser } from '../../actions/auth';

class TopBar extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      // Show Dropdown with logout link
      return (
        <Link
          className="link center-vertically"
          onClick={this.props.logoutUser} >
          Log Out
        </Link>
      );
    }

    return (
      <Link
        className="link center-vertically"
        onClick={this.props.openAuthModal}
      >
        Log In
      </Link>
    );
  }

  render() {
    return (
      <nav className="top-bar">
        <Link to="/" className="center-vertically">
          <img
            src="https://res.cloudinary.com/serenade-dates/image/upload/v1471979581/logos/logo_dark.png"
            className="center-vertically" />
        </Link>
        {this.renderLinks()}
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps, { openAuthModal, logoutUser })(TopBar);
