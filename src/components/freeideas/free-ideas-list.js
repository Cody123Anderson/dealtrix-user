import React, { Component } from 'react';

import FreeIdeasListItem from './free-ideas-list-item';
import './free-ideas-list.scss';

export default class FreeIdeasList extends Component {
  constructor() {
    super();

    this.renderIdeas = this.renderIdeas.bind(this);
  }

  renderIdeas(ideas) {
    if (!ideas) return <div/>;

    return ideas.map((i, index) => {
      return (
        <FreeIdeasListItem
          key={index}
          id={i._id}
          description={i.description}
          image={i.images[0].url}
          locations={i.locations}
          title={i.name}
          retailPrice={i.retail_price}
          ourPrice={i.our_price} />
      );
    });
  }

  render() {
    return (
      <div className="free-ideas-list-item">
        {this.renderIdeas(this.props.freeIdeas)}
      </div>
    );
  }
}
