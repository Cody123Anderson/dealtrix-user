import React, { Component } from 'react';

import './app.scss';
import AuthModal from '../auth/auth-modal';
import TopBar from '../topbar/top-bar';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      authModalIsOpen: false
    };
  }

  requestModalClose = () => {
    this.setState({ authModalIsOpen: false });
  }

  requestModalOpen = () => {
    this.setState({ authModalIsOpen: true });
  }

  render() {
    return (
      <div className="app">
        <AuthModal
          isOpen={this.state.authModalIsOpen}
          requestClose={this.requestModalClose} />
        <TopBar openAuthModal={this.requestModalOpen} />
        {this.props.children}
      </div>
    );
  }
}
