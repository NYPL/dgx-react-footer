import React from 'react';
import PropTypes from 'prop-types';

const SocialMediaItem = ({ className, name, link }) =>
  <li>
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
  className: PropTypes.string,
  name: PropTypes.string,
  link: PropTypes.string,
};

export default SocialMediaItem;
