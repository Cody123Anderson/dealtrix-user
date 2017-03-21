import React, { Component } from 'react';
import ReactSelect from 'react-select';

import styles from '../../styles/level5/input-select.css';

export default class Select extends Component {
  constructor() {
    super();

    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.props.onValueChange(value);
  }

  render() {
    return (
      <ReactSelect
        className={this.props.type === 'inline' ? styles.inline : styles.normal}
        value={this.props.value}
        options={this.props.options}
        onChange={this.onChange}
        placeholder={this.props.placeholder}
        searchable={this.props.searchable}
      />
    );
  }
}
