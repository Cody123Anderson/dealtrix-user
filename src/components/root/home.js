import React, { Component } from 'react';
import { connect } from 'react-redux';

import './home.scss';
import Explanation from './explanation';
import DealsList from '../deals/deals-list';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Explanation />
        <DealsList deals={this.props.freeIdeas} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    freeIdeas: state.freeIdeas.all
  };
}

export default connect(mapStateToProps, null)(Home);
