import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import HeartO from 'react-icons/lib/fa/heart-o';
import Truncate from 'react-truncate';

import './free-ideas-list-item.scss';
import MultilineText from '../utils/multiline-text';
import ActionButton from '../buttons/action-button';

export default class FreeIdeasListItem extends Component {
  constructor() {
    super();
    this.state = { locationText: null };
  }

  onViewMoreClick = () => {
    hashHistory.push(`/unsponsored/${this.props.id}`);
  }

  render() {
    return (
      <div className="free-ideas-list-item">
        <a href={`/#/unsponsored/${this.props.id}`} className="image-link">
          <img src={this.props.image} className="image" />
        </a>

        <div className="item-body">
          <div className="idea-title">{this.props.title}</div>
          <div className="description">
            <Truncate lines={3} ellipsis="...">
              <MultilineText text={this.props.description} />
            </Truncate>
          </div>
          <div className="button-row">
            <span className="retail-price">${this.props.retailPrice}</span>
            <ActionButton
              onClick={this.onViewMoreClick}
              size="large"
              text="View More" />
          </div>
          <div className="wishlist">
            <HeartO className="heart-position" />
            <span className="save">Save for later</span>
          </div>
          <span className="location">
            {this.state.locationText}
          </span>
        </div>
      </div>
    );
  }
}
