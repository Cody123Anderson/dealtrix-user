import React, { Component } from 'react';
import axios from 'axios';

import FreeIdeasListItem from './free-ideas-list-item';
import './free-ideas-list.scss';

export default class FreeIdeasList extends Component {
  constructor() {
    super();

    this.state = {
      freeIdeas: null
    };
  }

  componentDidMount() {
    const url = 'https://api.serenadedates.com/freeideas';
    axios.get(url)
      .then((response) => {
        console.log('response: ', response);
        this.setState({ freeIdeas: response.data.freeIdeas });
      })
      .catch((err) => {
        console.error('error: ', err);
      })
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
        {this.renderIdeas(this.state.freeIdeas)}
      </div>
    );
  }
}
