// Import libraries
import React from 'react';
import Radium from 'radium';

import FooterLinkItem from './FooterLinkItem.js';

class FooterLinkList extends React.Component {
  // Constructor used in ES6
  constructor(props) {
    super(props);
  }

  render() {
    let footerLinkItems = this.props.data.map((node, i) => {
        return (
          <FooterLinkItem
            name={node.name}
            link={node.link}
            className={node.className}
            key={i} />
        );
      });

    return (
      <ul className={this.props.className}>
        {footerLinkItems}
      </ul>
    );
  }
}

export default Radium(FooterLinkList);
