import React, { Component } from 'react';
import Modal from 'react-modal';
import MdClose from 'react-icons/lib/md/close';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import './auth-modal.scss';
import InputText from '../form/input-text';
import SecondaryButton from '../buttons/secondary-button';
import ActionButton from '../buttons/action-button';
import { closeAuthModal, loginUser, registerUser } from '../../actions/auth';

class AuthModal extends Component {
  constructor() {
    super();

    this.state = {
      loginEmail: '',
      loginEmailError: '',
      loginPassword: '',
      loginPasswordError: '',
      registerEmail: '',
      registerEmailError: '',
      registerPassword: '',
      registerPasswordError: '',
      showLoginForm: true
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
    this.validateLoginForm((isValid) => {
      if (!isValid) return;
      this.props.loginUser(this.state.loginEmail, this.state.loginPassword);
    })
  }

  onRegisterFormSubmit = (e) => {
    e.preventDefault();
    this.validateRegisterForm((isValid) => {
      if (!isValid) return;
      this.props.registerUser(this.state.registerEmail, this.state.registerPassword);
    })
  }

  toggleForms = (showLoginForm) => {
    this.setState({ showLoginForm });
  }

  validateLoginForm(cb) {
    let isValid = true;
    if (!this.state.loginEmail) {
      isValid = false;
      this.setState({ loginEmailError: '- this field is required'})
    }

    if (!this.state.loginPassword) {
      isValid = false;
      this.setState({ loginPasswordError: '- this field is required'})
    }

    cb(isValid);
  }

  validateRegisterForm(cb) {
    let isValid = true;
    if (!this.state.registerEmail) {
      isValid = false;
      this.setState({ registerEmailError: '- this field is required'})
    }

    if (!this.state.registerPassword) {
      isValid = false;
      this.setState({ registerPasswordError: '- this field is required'})
    }

    cb(isValid);
  }

  render() {
    return (
      <Modal
        className="auth-modal"
        overlayClassName="auth-modal-overlay"
        isOpen={this.props.modalIsOpen}
        onRequestClose={this.props.closeAuthModal}
        contentLabel="AuthModal"
      >
        <span className="close-modal" onClick={this.props.closeAuthModal}>
          <MdClose />
        </span>
        <div className="contain-logo">
          <img
            src="https://res.cloudinary.com/serenade-dates/image/upload/c_scale,h_51/v1471979581/logos/logo_light.png"
            className="logo" />
        </div>

        <form
          className={'login-form' + (this.state.showLoginForm ? '' : ' hidden')}
          onSubmit={this.onLoginFormSubmit}>
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
          <div className="login-error">{this.props.authError}</div>
          <div className="button-row">
            <SecondaryButton
              onClick={() => { this.toggleForms(false) }}
              margin="0 10px 0 0"
              text="register" />
            <ActionButton
              text="Log In"
              type="submit" />
          </div>
          <div className="forgot-password">
            <Link to="/forgot">Forgot password</Link>
          </div>
        </form>

        <form
          className={'register-form' + (this.state.showLoginForm ? ' hidden' : '')}
          onSubmit={this.onRegisterFormSubmit}>
          <div className="title">Register a Serenade Account</div>
          <InputText
            error={this.state.registerEmailError}
            label="Email"
            onChange={this.onInputChange}
            type="email"
            keyName="registerEmail"
            value={this.state.registerEmail} />
          <InputText
            error={this.state.registerPasswordError}
            label="Password"
            onChange={this.onInputChange}
            type="password"
            keyName="registerPassword"
            value={this.state.registerPassword} />
          <div className="login-error">{this.props.authError}</div>
          <div className="button-row">
            <SecondaryButton
              onClick={() => { this.toggleForms(true) }}
              margin="0 10px 0 0"
              text="login" />
            <ActionButton
              text="Register"
              type="submit" />
          </div>
        </form>
        
      </Modal>
    );
  }
}

function mapStateToProps(state) {
  return {
    authError: state.auth.error,
    modalIsOpen: state.auth.modalIsOpen
  };
}

export default connect(mapStateToProps, { closeAuthModal, loginUser, registerUser })(AuthModal);
