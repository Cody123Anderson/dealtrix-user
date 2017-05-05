import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

import './favorites.scss';
import AllIdeasList from './all-ideas-list';
import { getUserFavorites } from '../../actions/favorites';

class Favorites extends Component {
  componentDidMount() {
    if (!this.props.authenticated) {
      hashHistory.push('/');
      return;
    }
    
    this.props.getUserFavorites(this.props.token);
  }

  componentDidUpdate() {
    if (!this.props.authenticated) {
      hashHistory.push('/');
    }
  }

  render() {
    return (
      <div className="favorites">
        <div className="title">Your Favorites</div>
        <AllIdeasList freeIdeas={this.props.freeIdeas} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    freeIdeas: state.favorites.freeIdeaFavorites,
    token: state.auth.token
  };
}

export default connect(mapStateToProps, { getUserFavorites })(Favorites);
