import React, { PureComponent } from 'react';

import './index.scss';

export default class Footer extends PureComponent {
  render() {
    return (
      <div className="footer">
        <img
          className="logo"
          src="https://res.cloudinary.com/serenade-dates/logos/dealtrix-logo-light.png"
        />
      </div>
    );
  }
}
