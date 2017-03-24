import React, { Component } from 'react';

import './login-form.scss';
import InputText from '../form/input-text';

export default class AuthModal extends Component {

  onInputChange = (key, value) => {
    this.setState({
      [key]: value,
      [`${key}Error`]: ''
    });
  }

  render() {
    return (
      <form className="login-form" onSubmit={this.onLoginFormSubmit}>
        <h3>Login</h3>
        <InputText
          error={this.state.loginEmailError}
          label="Email"
          onChange={this.onInputChange}
          type="email"
          keyName="loginEmail",
          value={this.state.loginEmail} />
      </form>
    );
  }
}
