import React, { Component } from 'react';
import { connect } from 'react-redux';

import './app.scss';
import AuthModal from '../auth/auth-modal';
import TopBar from '../topbar/top-bar';
import Footer from '../footer';
import { fetchFreeIdeas } from '../../actions/free-ideas';
import { getUser } from '../../actions/user';

class App extends Component {
  componentDidMount() {
    this.props.fetchFreeIdeas();

    if (this.props.authenticated) {
      this.props.getUser(localStorage.getItem('token'));
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.authenticated !== nextProps.authenticated
      && nextProps.authenticated
      && nextProps.token
    ) {
      this.props.getUser(nextProps.token);
    }
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
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    freeIdeas: state.freeIdeas.all,
    token: state.auth.token
  };
}

export default connect(mapStateToProps, { fetchFreeIdeas, getUser })(App);
