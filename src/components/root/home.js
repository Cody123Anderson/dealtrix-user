import React, { Component } from 'react';

import './home.scss';
import FreeIdeasList from '../freeideas/free-ideas-list';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <FreeIdeasList />
      </div>
    )
  }
}
