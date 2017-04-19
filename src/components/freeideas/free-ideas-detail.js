import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeartO from 'react-icons/lib/fa/heart-o';

import './free-ideas-detail.scss';
import { fetchFreeIdea, clearFreeIdea } from '../../actions/free-ideas';
import ActionButton from '../buttons/action-button';
import MultilineText from '../utils/multiline-text';
import MdCheckCircle from 'react-icons/lib/md/check-circle';
import Location from '../locations/location';
import { FREE_IDEA_FINE_PRINT } from '../../config';

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

    const freeIdea = this.props.freeIdea;

    return (
      <div className="free-ideas-detail">

        <div className="mobile">
          <div className="contain-image">
            <img className="image" src={freeIdea.images[0].url} />
            <div className="wishlist">
              <HeartO className="heart-position" />
            </div>
          </div>
          <div className="tags">{this.renderTags(freeIdea.tags)}</div>
          <div className="title">{freeIdea.name}</div>
          <div className="business-name">at {freeIdea.businessName}</div>
          <div className="description">
            <MultilineText text={freeIdea.description} />
          </div>
          <div className="locations">
            <div>Locations Near You</div>
            {this.renderLocations(freeIdea.locations)}
          </div>
          <div className="fine-print">
            <div className="title">Purchase Details</div>
            <div className="contents">{FREE_IDEA_FINE_PRINT}</div>
          </div>
          <div className="footer">
            <span className="retail-price">
              Retail Price<br/>
              ${freeIdea.retailPrice}
            </span>
            <span
              title={`${freeIdea.businessName} is currently not sponsoring this date on our site. It is simply listed on our site as an additional date idea for your benefit.`}
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
              <div className="contain-image">
                <img className="image" src={freeIdea.images[0].url} />
                <span className="wishlist">
                  <HeartO className="heart-position" />
                </span>
              </div>
              <div className="tags">{this.renderTags(freeIdea.tags)}</div>
              <div className="description">
                <div className="title">Description of Date</div>
                <div className="contents">
                  <MultilineText text={freeIdea.description} />
                </div>
              </div>
            </div>
          </div>
          <div className="right-col">
            <div className="title">{freeIdea.name}</div>
            <div className="business-name">at {freeIdea.businessName}</div>
            <div className="pricing">
              <span className="retail">${freeIdea.retailPrice}</span>
              <span className="ours">${freeIdea.retailPrice}</span>
            </div>
            <div className="contain-button">
              <ActionButton
                disabled={true}
                size="large"
                text="No Discount"
                type="button" />
            </div>
            <div className="fine-print">
              <div className="title">Purchase Details</div>
              <div className="contents">{FREE_IDEA_FINE_PRINT}</div>
            </div>
            <div className="locations">
              <div className="title">Locations Near You</div>
              {this.renderLocations(freeIdea.locations)}
            </div>
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
