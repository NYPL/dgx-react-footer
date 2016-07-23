// Import libraries
import React from 'react';

const SocialMediaItem = ({ className, name, link }) =>
  <li id={name}>
    <a
      className={className}
      href={link}
    >
      <span className="replaced-text">
        {name}
      </span>
    </a>
  </li>;

SocialMediaItem.propTypes = {
  className: React.PropTypes.string,
  name: React.PropTypes.string,
  link: React.PropTypes.string,
};

export default SocialMediaItem;
