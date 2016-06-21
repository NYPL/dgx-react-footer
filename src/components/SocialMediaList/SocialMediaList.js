// Import libraries
import React from 'react';
import radium from 'radium';

import SocialMediaItem from './SocialMediaItem.js';

const SocialMediaList = (props) => {
  const socialMediaItems = props.data.map((node, i) => {
    return (
      <SocialMediaItem
        name={node.name}
        link={node.link}
        className={node.className}
        key={i} />
    );
  });

  return (
    <ul className={props.className} style={props.style}>
      {socialMediaItems}
    </ul>
  );
};

SocialMediaList.propTypes = {
  className: React.PropTypes.string.isRequired,
  link: React.PropTypes.string,
  style: React.PropTypes.object,
  data: React.PropTypes.array,
};

export default radium(SocialMediaList);
