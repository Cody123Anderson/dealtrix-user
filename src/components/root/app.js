import React, { Component } from 'react';

import './app.scss';
import AuthModal from '../auth/auth-modal';
import TopBar from '../topbar/top-bar';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <AuthModal />
        <TopBar />
        <div className="app-contents">
          {this.props.children}
        </div>
      </div>
    );
  }
}
