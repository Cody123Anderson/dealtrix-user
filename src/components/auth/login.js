import React, { Component } from 'react';
import { connect } from 'react-redux';

import './login.scss';
import Form from '../form/form';
import FormTitle from '../form/form-title';
import InputText from '../form/input-text';
import ActionButton from '../buttons/action-button';
import * as authActions from '../../actions/auth';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      password: '',
      passwordError: '',
      username: '',
      usernameError: ''
    };
  }

  onFormSubmit = () => {
    this.validateForm((err) => {
      if (err) { return; }

      // Log user in
      this.props.loginUser(this.state.username, this.state.password);
    });
  }

  onInputTextChange = (key, value) => {
    this.setState({
      [key]: value,
      [`${key}Error`]: ''
    });
  }

  validateForm = (cb) => {
    let error = false;

    // Validate username
    const username = this.state.username;
    if (!username) {
      this.setState({ usernameError: ' - required field'});
      error = true;
    } else {
      this.setState({ usernameError: ''});
    }

    // Validate password
    const password = this.state.password;
    if (!password) {
      this.setState({ passwordError: ' - required field'});
      error = true;
    } else {
      this.setState({ passwordError: ''});
    }

    cb(error);
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="auth-error">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    return (
      <div className="login">
        <Form onSubmit={this.onFormSubmit} size={500}>
          <FormTitle text="Admin Login" />
          <InputText
            error={this.state.usernameError}
            label="Username"
            type="text"
            onChange={this.onInputTextChange}
            keyName="username"
            value={this.state.username} />
          <InputText
            error={this.state.passwordError}
            label="Password"
            type="password"
            onChange={this.onInputTextChange}
            keyName="password"
            value={this.state.password} />
          {this.renderAlert()}
          <ActionButton text="Login" submit={true} />
        </Form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error
  };
}

export default connect(mapStateToProps, authActions)(Login);
