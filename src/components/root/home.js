import React, { Component } from 'react';

import './home.scss';
import FreeIdeasList from '../freeideas/free-ideas-list';

const mockIdeas = [
  {
    business: '1233',
    categories: ['1234', '3243'],
    clothes: ['adfadf', 'asdfasdf'],
    description: 'Come have a night you\'ll never forget as you and your date learn some sweet Brazilian Jiu Jitsu moves. You\'ll get a full hour with your own private instructor who will teach you the basics and run you through some fun drills that you can do at home afterwards.',
    discount_percent: 50,
    images: [{id: '123', url: 'http://www.alvarezbjj.com/wp-content/uploads/2013/09/jessica-vs-boys-2.jpg'}],
    items: [],
    locations: [123, 123],
    name: 'The Brazilian Warrior',
    retail_price: 89.99,
    our_price: 44.99,
    status: 'Active',
    type: 'Activity'
  }
];

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        Hello
        <FreeIdeasList freeIdeas={mockIdeas} />
      </div>
    )
  }
}
