import React, { Component } from 'react';
import HeartO from 'react-icons/lib/fa/heart-o';

import './free-ideas-list-item.scss';

export default class FreeIdeasListItem extends Component {
  constructor() {
    super();
    this.state = { locationText: null };
  }

  render() {
    return (
      <div className="free-ideas-list-item">
        <a href={`ideas/${this.props.id}`} className="image-link">
          <img src={this.props.image} className="image" />
        </a>

        <div className="item-body">
          <div className="idea-title">{this.props.title}</div>
          <div className="description">{this.props.description}</div>
          <div className="button-row">
            <span className="old-price">${this.props.retailPrice}</span>
            <span className="new-price">${this.props.ourPrice}</span>
            {/* <a href={`ideas/${this.props.id}`} className={btn.btnRedLarge}>View More</a> */}
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
