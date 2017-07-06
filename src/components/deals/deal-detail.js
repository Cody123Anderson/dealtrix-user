import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeartO from 'react-icons/lib/fa/heart-o';

import './deal-detail.scss';
import { authError, openAuthModal } from '../../actions/auth';
import { fetchFreeIdea, clearFreeIdea } from '../../actions/free-ideas';
import { updateUser } from '../../actions/user';
import FavoritesHeart from '../buttons/favorites-heart';
import ActionButton from '../buttons/action-button';
import MultilineText from '../utils/multiline-text';
import MdCheckCircle from 'react-icons/lib/md/check-circle';
import Location from '../locations/location';
import { FREE_IDEA_FINE_PRINT } from '../../config';

class DealDetail extends Component {
  state = {
    inFavorites: false
  }

  componentDidMount() {
    const id = this.props.params.id;
    this.props.fetchFreeIdea(id);

    const inFavorites = this.inFavoritesCheck(this.props.userFavorites, id);
    this.setState({ inFavorites });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.userFavorites !== nextProps.userFavorites) {
      const inFavorites = this.inFavoritesCheck(nextProps.userFavorites, this.props.params.id);
      this.setState({ inFavorites });
    }
  }

  componentWillUnmount() {
    this.props.clearFreeIdea();
  }

  inFavoritesCheck(userFavorites, ideaId) {
    if (userFavorites.indexOf(ideaId) !== -1) {
      return true;
    } else {
      return false;
    }
  }

  onDealClick = () => {
    alert('Deal Clicked: Need to add functionality still.');
  }

  onFavoritesClick = () => {
    if (!this.props.authenticated) {
      this.props.authError('Please log in to add this date to your favorites');
      this.props.openAuthModal();
      return;
    }

    const id = this.props.params.id;
    let userFavorites = this.props.userFavorites.slice();
    const inFavorites = this.inFavoritesCheck(userFavorites, id);

    if (inFavorites) {
      // Remove from favorites
      const index = userFavorites.indexOf(id);
      userFavorites.splice(index, 1);
    } else {
      // Add to favorites
      userFavorites.push(id)
    }

    // Show user the change immediately
    this.setState({ inFavorites: !this.state.inFavorites });

    // Persist the change
    const body = { favorites: userFavorites };
    this.props.updateUser(body, this.props.token);
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
    if (!this.props.deal) return <div/>;

    const { deal } = this.props;

    return (
      <div className="deal-detail">
        <div className="mobile">
          <div className="contain-image">
            <img className="image" src={deal.images[0].url} />
            <div className="wishlist" onClick={this.onFavoritesClick}>
              <FavoritesHeart
                color="#FF7175"
                size="25px"
                inFavorites={this.state.inFavorites} />
            </div>
          </div>
          <div className="tags">{this.renderTags(deal.tags)}</div>
          <div className="title">{deal.name}</div>
          <div className="business-name">at {deal.businessName}</div>
          <div className="description">
            <MultilineText text={deal.description} />
          </div>
          <div className="locations">
            <div>Locations Near You</div>
            {this.renderLocations(deal.locations)}
          </div>
          <div className="fine-print">
            <div className="title">Purchase Details</div>
            <div className="contents">{FREE_IDEA_FINE_PRINT}</div>
          </div>
          <div className="footer">
            <span className="retail-price">
              Retail Price<br/>
              ${deal.retailPrice}
            </span>
            <span
              title={`${deal.businessName} is currently not sponsoring this date on our site. It is simply listed on our site as an additional date idea for your benefit.`}
              className="footer-button">
              <ActionButton
                onClick={this.onDealClick}
                text="Get Deal Card"
                type="button" />
            </span>
          </div>
        </div>

        <div className="desktop">
          <div className="left-col">
            <div className="contents">
              <div className="contain-image">
                <img className="image" src={deal.images[0].url} />
                <span className="wishlist" onClick={this.onFavoritesClick}>
                  <FavoritesHeart
                    color="#FF7175"
                    size="30px"
                    inFavorites={this.state.inFavorites} />
                </span>
              </div>
              <div className="tags">{this.renderTags(deal.tags)}</div>
              <div className="description">
                <div className="title">Description of Date</div>
                <div className="contents">
                  <MultilineText text={deal.description} />
                </div>
              </div>
            </div>
          </div>
          <div className="right-col">
            <div className="title">{deal.name}</div>
            <div className="business-name">at {deal.businessName}</div>
            <div className="pricing">
              <span className="retail">${deal.retailPrice}</span>
              <span className="ours">${deal.retailPrice}</span>
            </div>
            <div className="contain-button">
              <ActionButton
                onClick={this.onDealClick}
                size="large"
                text="Get Deal Card"
                type="button" />
            </div>
            <div className="fine-print">
              <div className="title">Purchase Details</div>
              <div className="contents">{FREE_IDEA_FINE_PRINT}</div>
            </div>
            <div className="locations">
              <div className="title">Locations Near You</div>
              {this.renderLocations(deal.locations)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    deal: state.freeIdeas.current,
    token: state.auth.token,
    userFavorites: state.user.favorites
  };
}

export default connect(mapStateToProps, {
  authError,
  clearFreeIdea,
  fetchFreeIdea,
  openAuthModal,
  updateUser
})(DealDetail);
