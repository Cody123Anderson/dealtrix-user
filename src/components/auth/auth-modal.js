import React, { Component } from 'react';
import Modal from 'react-modal';
import MdClose from 'react-icons/lib/md/close';

import './auth-modal.scss';
import InputText from '../form/input-text';
import ActionButton from '../buttons/action-button';

export default class AuthModal extends Component {
  constructor() {
    super();

    this.state = {
      loginEmail: '',
      loginEmailError: '',
      loginPassword: '',
      loginPasswordError: ''
    };
  }

  onInputChange = (key, value) => {
    this.setState({
      [key]: value,
      [`${key}Error`]: ''
    });
  }

  onLoginFormSubmit = (e) => {
    e.preventDefault();
    alert('Logging In!');
  }

  render() {
    return (
      <Modal
        className="auth-modal"
        overlayClassName="auth-modal-overlay"
        isOpen={this.props.isOpen}
        onRequestClose={this.props.requestClose}
        contentLabel="AuthModal"
      >
        <span className="close-modal" onClick={this.props.requestClose}>
          <MdClose />
        </span>
        <div className="contain-logo">
          <img
            src="https://res.cloudinary.com/serenade-dates/image/upload/c_scale,h_51/v1471979581/logos/logo_light.png"
            className="logo" />
        </div>
        <form className="login-form" onSubmit={this.onLoginFormSubmit}>
          <div className="title">Log in to Your Serenade Account</div>
          <InputText
            error={this.state.loginEmailError}
            label="Email"
            onChange={this.onInputChange}
            type="email"
            keyName="loginEmail"
            value={this.state.loginEmail} />
          <InputText
            error={this.state.loginPasswordError}
            label="Password"
            onChange={this.onInputChange}
            type="password"
            keyName="loginPassword"
            value={this.state.loginPassword} />
          <div className="button-row">
            <ActionButton
              text="Log In"
              type="submit" />
          </div>
        </form>
      </Modal>
    );
  }
}

AuthModal.propTypes = {
  isOpen: React.PropTypes.bool.isRequired
}
