import React, { Component } from 'react';

import './action-button.scss';

export default class ActionButton extends Component {
  doNothing = () => {
    return;
  }

  onBtnClick = (e) => {
    e.preventDefault();

    // Don't allow double clicks if loading
    if (this.props.loading) {
      return;
    }

    this.props.onClick();
  }

  render() {
    return (
      <button
      type={this.props.submit ? 'submit' : 'button'}
      className={`action-button ${this.props.size}`}
      disabled={this.props.loading}
      onClick={this.props.onClick ? this.onBtnClick : this.doNothing}>
        {this.props.text}
      </button>
    );
  }
}

ActionButton.defaultProps = {
  loading: false,
  size: 'regular'
};

ActionButton.propTypes = {
  loading: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  size: React.PropTypes.string, // regular, large
  submit: React.PropTypes.bool,
  text: React.PropTypes.string.isRequired
};
