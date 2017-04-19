import React, { Component } from 'react';
import { connect } from 'react-redux';

import './app.scss';
import AuthModal from '../auth/auth-modal';
import TopBar from '../topbar/top-bar';
import { fetchFreeIdeas } from '../../actions/free-ideas';

class App extends Component {
  componentDidMount() {
    this.props.fetchFreeIdeas();
  }

  render() {
    if (!this.props.freeIdeas) return <div />;

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

function mapStateToProps(state) {
  return {
    freeIdeas: state.freeIdeas.all
  };
}

export default connect(mapStateToProps, { fetchFreeIdeas })(App);
