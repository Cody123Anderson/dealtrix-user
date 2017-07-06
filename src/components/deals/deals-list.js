import React, { PureComponent } from 'react';
import { array } from 'prop-types';

import './deals-list.scss';
import DealsListItem from './deals-list-item';

export default class DealsList extends PureComponent {
  static propTypes = {
    deals: array.isRequired
  }

  renderDeals = (deals) => {
    if (!deals) return <div/>;

    return deals.map((deal, index) => {
      return (
        <DealsListItem
          key={deal.id}
          id={deal.id}
          description={deal.description}
          image={deal.images[0].url}
          locations={deal.locations}
          title={deal.name}
          retailPrice={deal.retailPrice} />
      );
    });
  }

  render() {
    return (
      <div className="deals-list">
        {this.renderDeals(this.props.deals)}
      </div>
    );
  }
}
