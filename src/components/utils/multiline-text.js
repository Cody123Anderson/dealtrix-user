import React, { Component } from 'react';

export default class MultilineText extends Component {
  splitTextIntoLines() {
    return this.props.text.split('\n').map((line, i, arr) => {
      let newLine = <span key={i}>{line}</span>;

      if (i === arr.length - 1) {
        return newLine;
      } else {
        return [newLine, <br key={i + 'br'} />];
      }
    })
  }

  render() {
    return (
      <div className="multiline-text">
        {this.splitTextIntoLines(this.props.text)}
      </div>
    );
  }
}

MultilineText.propTypes = {
  text: React.PropTypes.string.isRequired
};
