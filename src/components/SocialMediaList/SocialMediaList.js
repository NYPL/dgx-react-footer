// Import libraries
import React from 'react';
import Radium from 'radium';

import SocialMediaItem from './SocialMediaItem.js';

class SocialMediaList extends React.Component {
  // Constructor used in ES6
  constructor(props) {
    super(props);
  }

  render() {
    let socialMediaItems = this.props.data.map((node, i) => {
        return (
          <SocialMediaItem
            name={node.name}
            link={node.link}
            className={node.className}
            key={i} />
        );
      });

    return (
      <ul className={this.props.className} style={this.props.style}>
        {socialMediaItems}
      </ul>
    );
  }
}

export default Radium(SocialMediaList);
