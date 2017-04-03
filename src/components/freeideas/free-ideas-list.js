import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import './free-ideas-list.scss';
import FreeIdeasListItem from './free-ideas-list-item';
import { fetchFreeIdeas } from '../../actions/free-ideas';

class FreeIdeasList extends Component {
  componentDidMount() {
    this.props.fetchFreeIdeas();
  }

  renderIdeas = (ideas) => {
    if (!ideas) return <div/>;

    return ideas.map((idea, index) => {
      return (
        <FreeIdeasListItem
          key={idea.id}
          id={idea.id}
          description={idea.description}
          image={idea.images[0].url}
          locations={idea.locations}
          title={idea.name}
          retailPrice={idea.retailPrice} />
      );
    });
  }

  render() {
    return (
      <div className="free-ideas-list">
        {this.renderIdeas(this.props.freeIdeas)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    freeIdeas: state.freeIdeas.all
  };
}

export default connect(mapStateToProps, { fetchFreeIdeas })(FreeIdeasList);
