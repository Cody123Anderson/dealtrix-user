import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { hashHistory, Link } from 'react-router';
import MdLocationOn from 'react-icons/lib/md/location-on';
import Truncate from 'react-truncate';
import { string, array } from 'prop-types';

import './deals-list-item.scss';
import MultilineText from '../utils/multiline-text';
import ActionButton from '../buttons/action-button';
import FavoritesHeart from '../buttons/favorites-heart';
import { authError, openAuthModal } from '../../actions/auth';
import { updateUser } from '../../actions/user';

class DealsListItem extends PureComponent {
  static propTypes = {
    id: string.isRequired,
    token: string,
    userFavorites: array.isRequired
  }

  state = {
    inFavorites: false,
    locationText: null
  }

  componentDidMount() {
    if (this.props.locations.length > 1) {
      this.setState({ locationText: `${this.props.locations.length} locations`});
    } else {
      const location = this.props.locations[0];
      this.setState({ locationText: `${location.city}, ${location.state}`});
    }

    const inFavorites = this.inFavoritesCheck(this.props.userFavorites);
    this.setState({ inFavorites });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.userFavorites !== nextProps.userFavorites) {
      const inFavorites = this.inFavoritesCheck(nextProps.userFavorites);
      this.setState({ inFavorites });
    }
  }

  inFavoritesCheck(userFavorites) {
    if (userFavorites.indexOf(this.props.id) !== -1) {
      return true;
    } else {
      return false;
    }
  }

  onFavoritesClick = () => {
    if (!this.props.authenticated) {
      this.props.authError('Please log in to add this date to your favorites');
      this.props.openAuthModal();
      return;
    }

    let userFavorites = this.props.userFavorites.slice();
    const inFavorites = this.inFavoritesCheck(userFavorites);

    if (inFavorites) {
      // Remove from favorites
      const index = userFavorites.indexOf(this.props.id);
      userFavorites.splice(index, 1);
    } else {
      // Add to favorites
      userFavorites.push(this.props.id)
    }

    // Show user the change immediately
    this.setState({ inFavorites: !this.state.inFavorites });

    const body = { favorites: userFavorites };
    this.props.updateUser(body, this.props.token);
  }

  onViewMoreClick = () => {
    hashHistory.push(`/deals/${this.props.id}`);
  }

  renderFavoritesText(inFavorites) {
    if (inFavorites) {
      return 'Added to favorites';
    } else {
      return 'Add to favorites';
    }
  }

  render() {
    return (
      <div className="deals-list-item">
        <Link to={`/deals/${this.props.id}`} className="image-link">
          <img src={this.props.image} className="image" />
        </Link>

        <div className="item-body">
          <div className="idea-title">
            {this.props.title}
          </div>
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
              text="View More"
              type="button" />
          </div>
          <div className="wishlist" onClick={this.onFavoritesClick}>
            <FavoritesHeart
              inFavorites={this.state.inFavorites}
              color="#FF7175"
              size="20px" />
            <span className="save">
              {this.renderFavoritesText(this.state.inFavorites)}
            </span>
          </div>
          <span className="location">
            <MdLocationOn className="location-icon" />
            {this.state.locationText}
          </span>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    token: state.auth.token,
    userFavorites: state.user.favorites
  };
}

export default connect(mapStateToProps, {
  authError,
  openAuthModal,
  updateUser
})(DealsListItem);
