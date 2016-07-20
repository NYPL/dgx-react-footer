// Import libraries
import React from 'react';

import SocialMediaItem from './../SocialMediaItem/SocialMediaItem.jsx';

const SocialMediaList = (props) => {
  const socialMediaItems = props.data.map((node, i) =>
    <SocialMediaItem
      name={node.name}
      link={node.link}
      className={node.className}
      key={i}
    />
  );

  return (
    <ul className={props.className}>
      {socialMediaItems}
    </ul>
  );
};

SocialMediaList.propTypes = {
  className: React.PropTypes.string.isRequired,
  link: React.PropTypes.string,
  data: React.PropTypes.array,
};

export default SocialMediaList;
