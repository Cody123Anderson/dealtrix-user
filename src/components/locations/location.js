import React, { PureComponent } from 'react';
import MdLocationOn from 'react-icons/lib/md/location-on';

import './location.scss';

export default class Location extends PureComponent {
  constructor() {
    super();

    this.state = {
      googleAddress: ''
    };
  }

  componentDidMount() {
    this.formatAddress(this.props.data);
  }

  formatAddress(location) {
    const baseGoogleAddress = 'https://maps.google.com?saddr=Current+Location&daddr=';
    const address = this.replaceSpaces(location.address);
    const city = this.replaceSpaces(location.city);
    const state = this.replaceSpaces(location.state);
    const googleAddress = `${baseGoogleAddress}${address}+${city}+${state}+${location.zip}&layer=t`;

    this.setState({ googleAddress });
  }

  replaceSpaces(text) {
    return text.split(' ').join('+');
  }

  render() {
    if (!this.state.googleAddress) return <div/>;

    const location = this.props.data;

    return (
      <div className="location">
        <a target="_blank" href={this.state.googleAddress}>
          <div className="icon"><MdLocationOn /></div>
        </a>
        <div className="contents">
          <div>{location.address}</div>
          <div>{location.city}, {location.state} {location.zip}</div>
          <div>
            <a target="_blank" href={this.state.googleAddress}>
              Get Directions
            </a>
          </div>
        </div>
      </div>
    );
  }
}
