import React, { Component } from 'react';

import './input-text.scss';

export default class InputText extends Component {
  onInputChange = (e) => {
    this.props.onChange(this.props.keyName, e.target.value, this.props.index);
  }

  render() {
    return (
      <div className="input-text">
        <label>
          {this.props.label}
          <span className="error">{this.props.error}</span>
        </label>
        <input
          className={this.props.error ? ' error-border' : ''}
          type={this.props.type}
          value={this.props.value}
          onChange={this.onInputChange} />
      </div>
    );
  }
}

InputText.propTypes = {
  error: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  type: React.PropTypes.string.isRequired, //text, password, email
  keyName: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  index: React.PropTypes.number //option index to pass to onChange function
};
