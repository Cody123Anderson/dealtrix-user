import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Heart from 'react-icons/lib/fa/heart';
import HeartO from 'react-icons/lib/fa/heart-o';

import './favorites-heart.scss';

export default class FavoritesHeart extends PureComponent {
  renderHeart(inFavorites) {
    const heartStyle = {
      color: this.props.color,
      fontSize: this.props.size
    };

    if (inFavorites) {
      return <Heart style={heartStyle} />;
    } else {
      return <HeartO style={heartStyle} />;
    }
  }

  render() {
    return (
      <span className="favorites-heart">
        {this.renderHeart(this.props.inFavorites)}
      </span>
    );
  }
}

FavoritesHeart.propTypes = {
  color: PropTypes.string.isRequired,
  inFavorites: PropTypes.bool.isRequired,
  size: PropTypes.string.isRequired, // i.e. 20px
}
