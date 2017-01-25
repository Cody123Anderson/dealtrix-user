import React, { Component } from 'react';
import axios from 'axios';
import 'react-select/dist/react-select.css';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaFacebook from 'react-icons/lib/fa/facebook';

import styles from '../../styles/level2/landing-page.css';
import buttons from '../../styles/buttons.css';
import forms from '../../styles/forms.css';
import config from '../../config';
import InputSelect from '../level5/input-select';
import IdeaList from '../level3/idea-list';

const selectOptions = [
  { value: 'Utah - Salt Lake City', label: 'Salt Lake City' },
  { value: 'Utah - Utah Valley', label: 'Utah Valley' }
];

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

export default class LandingPage extends Component {
  constructor() {
    super();

    this.state = {
      ideas: mockIdeas,
      email: '',
      location: null,
      region: null,
      showThanks: false,
      state: null,
      submitPossible: true
    };

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onLocationChange = this.onLocationChange.bind(this);
  }

  onEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();

    this.setState({ submitPossible: false });

    const body = {
      email: this.state.email,
      region: this.state.region,
      state: this.state.state
    };

    axios.post(`${config.API_URL}/subscriber`, body)
    .then(() => {
      this.setState({
        email: '',
        location: null,
        region: null,
        showThanks: true,
        state: null
      });
    })
    .catch((error) => {
      this.setState({ submitPossible: true });
      console.error('error submitting form: ', error);
    });
  }

  onLocationChange(location) {
    if (location) {
      const locations = location.value.split(' - ');
      this.setState({
        location: location.value,
        region: locations[1],
        state: locations[0]
      });
    } else {
      this.setState({
        location: null,
        region: null,
        state: null
      });
    }
  }

  render() {
    return (
      <div>
        <div className={styles.background}>
          <div className={styles.cover}>
            <div className={styles.content}>
              <img src="https://res.cloudinary.com/serenade-dates/image/upload/c_scale,h_40/v1471979581/logos/logo_light.png"
              className={styles.logo} />
              <div className={this.state.showThanks ? styles.hidden : ''}>
                <div className={styles.title}>Date Package Giveaways!</div>
                <div className={styles.subtitle}>
                  Ready to go on dates you'll never forget? By joining our email list,
                  you're entered to win a free date package for two every month.
                </div>
                <div className={styles.subtitle}>Date ideas and discounts sent weekly to all participants.</div>
                <form class={styles.signupForm} onSubmit={this.onFormSubmit}>
                  <input
                    type="email"
                    className={`${forms.input} ${styles.email}`}
                    placeholder="Email"
                    onChange={(e) => this.onEmailChange(e)}
                    value={this.state.email} />
                  <InputSelect
                    value={this.state.location}
                    options={selectOptions}
                    onValueChange={this.onLocationChange}
                    placeholder={'Select location...'}
                    searchable={false}
                    type={'inline'}
                  />
                  <button
                    disabled={this.state.region && this.state.email && this.state.submitPossible ? false : true}
                    type="submit"
                    className={`${buttons.btnRed} ${styles.submit}`}
                  >
                    Submit
                  </button>
                </form>
              </div>
              <div className={this.state.showThanks ? '' : styles.hidden}>
                <div className={styles.title}>Thanks for Signing Up!</div>
                <div className={styles.subtitle}>
                  You're now automatically entered to win any giveaways in your area. Follow us on social for even more opportunities to win!
                </div>
                <a href="https://www.instagram.com/serenade_dates/" className={styles.socialIcon}>
                  <FaInstagram />
                </a>
                <a href="https://www.facebook.com/serenadedates" className={styles.socialIcon}>
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={this.state.ideas ? styles.ideasSection : styles.hidden}>
          <div className={styles.ideasTitle}>Utah Date Ideas</div>
          <IdeaList ideas={this.state.ideas} />
        </div>
      </div>
    );
  }
}
