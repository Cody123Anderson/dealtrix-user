import React, { Component } from 'react';

import './home.scss';
import Explanation from './explanation';
import FreeIdeasList from '../freeideas/free-ideas-list';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Explanation />
        <FreeIdeasList />
      </div>
    )
  }
}
