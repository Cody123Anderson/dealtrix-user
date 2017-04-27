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
          className="link"
          onClick={this.props.logoutUser} >
          {this.props.user ? this.props.user.email.split('@')[0] : 'My Account'}
        </Link>
      );
    }

    return (
      <Link
        className="link"
        onClick={this.props.openAuthModal}
      >
        Log In / Register
      </Link>
    );
  }

  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-contents">
          <div className="left">
            <Link to="/" className="logo">
              <img src="https://res.cloudinary.com/serenade-dates/image/upload/v1491406093/logos/logo_dark.png" />
            </Link>
          </div>
          <div className="right">
            {this.renderLinks()}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    user: state.user
  };
}

export default connect(mapStateToProps, { openAuthModal, logoutUser })(TopBar);
