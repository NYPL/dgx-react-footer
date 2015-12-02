// Import libraries
import React from 'react';
import Radium from 'radium';

class FooterLinkItem extends React.Component {
  // Constructor used in ES6
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className={this.props.className}>
        <a href={this.props.link}>
          {this.props.name}
        </a>
      </li>
    );
  }
}

export default Radium(FooterLinkItem);
