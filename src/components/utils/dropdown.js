import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import MdArrowDropDown from 'react-icons/lib/md/arrow-drop-down';

import './dropdown.scss';

export default class Dropdown extends PureComponent {
  constructor() {
    super();

    this.state = {
      dropdownOpen: false
    };
  }

  componentDidMount() {
    this._mounted = true;
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  renderLinks(links) {
    return links.map((link) => {
      return (
        <a
          key={link.title}
          className="dropdown-link"
          onClick={link.onClick}>
          {link.title}
        </a>
      );
    });
  }

  toggleDropdown = () => {
    if (this.state.dropdownOpen) {
      // Remove event listener to body and update state
      document.removeEventListener('click', this.toggleDropdown);
      if (this._mounted) {
        this.setState({ dropdownOpen: false });
      }
    } else {
      // Add event listener to body and update state
      document.addEventListener('click', this.toggleDropdown);
      this.setState({ dropdownOpen: true });
    }
  }

  render() {
    return (
      <div className="dropdown">
        <div className="title" onClick={this.toggleDropdown}>
          {this.props.title}
          <MdArrowDropDown className="icon" />
        </div>
        <div className={`contents ${this.state.dropdownOpen ? '' : 'hide'}`}>
          {this.renderLinks(this.props.links)}
        </div>
      </div>
    );
  }
}

Dropdown.propTypes = {
  links: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};
