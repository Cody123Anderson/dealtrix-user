import React, { Component } from 'react';

import './all-ideas-list.scss';
import AllIdeasListItem from './all-ideas-list-item';

export default class AllIdeasList extends Component {
  renderFreeIdeas = (ideas) => {
    if (!ideas) return <div/>;

    return ideas.map((idea, index) => {
      return (
        <AllIdeasListItem
          key={idea.id}
          id={idea.id}
          description={idea.description}
          image={idea.images[0].url}
          locations={idea.locations}
          title={idea.name}
          retailPrice={idea.retailPrice}
          type="unsponsored" />
      );
    });
  }

  render() {
    return (
      <div className="all-ideas-list">
        {this.renderFreeIdeas(this.props.freeIdeas)}
      </div>
    );
  }
}

AllIdeasList.propTypes = {
  freeIdeas: React.PropTypes.array,
  ideas: React.PropTypes.array
};
