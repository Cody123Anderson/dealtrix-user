import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, hashHistory } from 'react-router';

import './top-bar.scss';
import { openAuthModal, logoutUser } from '../../actions/auth';
import Dropdown from '../utils/dropdown';

class TopBar extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      const links = [
        { title: 'Favorites', onClick: this.onFavoritesClick },
        { title: 'Log Out', onClick: this.onLogoutClick }
      ];

      return (
        <Dropdown
          links={links}
          title={
            this.props.user ? this.props.user.email.split('@')[0] : 'My Account'
          } />
      );
    }

    return (
      <Link className="link" onClick={this.props.openAuthModal}>
        Log In <span className="red">/</span> Register
      </Link>
    );
  }

  onFavoritesClick = () => {
    hashHistory.push('favorites');
  }

  onLogoutClick = () => {
    this.props.logoutUser();
  }

  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-contents">
          <div className="left">
            <Link to="/" className="logo">
              <img src="https://res.cloudinary.com/serenade-dates/logos/dealtrix-logo-light.png" />
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
