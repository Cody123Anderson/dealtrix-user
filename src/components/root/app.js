import React, { Component } from 'react';

import './app.scss';
import TopBar from '../topbar/top-bar';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <TopBar />
        {this.props.children}
      </div>
    );
  }
}
