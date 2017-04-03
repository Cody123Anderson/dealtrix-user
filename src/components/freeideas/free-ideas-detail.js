import React, { Component } from 'react';
import { connect } from 'react-redux';

import './free-ideas-detail.scss';
import { fetchFreeIdea, clearFreeIdea } from '../../actions/free-ideas';
import ActionButton from '../buttons/action-button';
import MultilineText from '../utils/multiline-text';
import MdCheckCircle from 'react-icons/lib/md/check-circle';
import Location from '../locations/location';

class FreeIdeasDetail extends Component {
  componentDidMount() {
    this.props.fetchFreeIdea(this.props.params.id);
  }

  componentWillUnmount() {
    this.props.clearFreeIdea();
  }

  renderLocations(locations) {
    return locations.map((location) => {
      return <Location key={location.address} data={location} />;
    });
  }

  renderTags(tags) {
    return tags.map((tag) => {
      return (
        <span className="tag" key={tag}>
          <span className="icon"><MdCheckCircle /></span>
          {tag}
        </span>
      );
    });
  }

  render() {
    if (!this.props.freeIdea) return <div/>;

    return (
      <div className="free-ideas-detail">
        <div className="mobile">
          <img className="image" src={this.props.freeIdea.images[0].url} />
          <div className="tags">{this.renderTags(this.props.freeIdea.tags)}</div>
          <div className="title">{this.props.freeIdea.name}</div>
          <div className="business-name">@{this.props.freeIdea.businessName}</div>
          <div className="description">
            <MultilineText text={this.props.freeIdea.description} />
          </div>
          <div className="locations">
            <div>Locations Near You</div>
            {this.renderLocations(this.props.freeIdea.locations)}
          </div>
          <div className="footer">
            <span className="retail-price">
              Retail Price<br/>
              ${this.props.freeIdea.retailPrice}
            </span>
            <span
              title={`${this.props.freeIdea.businessName} is currently not sponsoring this date on our site. It is simply listed on our site as an additional date idea for your benefit.`}
              className="footer-button">
              <ActionButton
                disabled={true}
                text="No Discount"
                type="button" />
            </span>
          </div>
        </div>
        <div className="desktop">
          <div className="left-col">
            <div className="contents">
              <img className="image" src={this.props.freeIdea.images[0].url} />
            </div>
          </div>
          <div className="right-col">
            <div className="title">{this.props.freeIdea.name}</div>
            <div className="business-name">@{this.props.freeIdea.businessName}</div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    freeIdea: state.freeIdeas.current
  };
}

export default connect(mapStateToProps, { fetchFreeIdea, clearFreeIdea })(FreeIdeasDetail);
