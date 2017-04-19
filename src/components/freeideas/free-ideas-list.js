import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import './free-ideas-list.scss';
import FreeIdeasListItem from './free-ideas-list-item';

class FreeIdeasList extends Component {
  renderIdeas = (ideas) => {
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

FreeIdeasList.propTypes = {
  freeIdeas: React.PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    freeIdeas: state.freeIdeas.all
  };
}

export default connect(mapStateToProps, null)(FreeIdeasList);
