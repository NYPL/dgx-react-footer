// Import libraries
import React from 'react';

const SocialMediaItem = (props) => (
  <li key="SocialMediaNode" id={props.name}>
    <a
      key="SocialMediaLink"
      className={props.className}
      href={props.link}
    >
      <span className="replaced-text">
        {props.name}
      </span>
    </a>
  </li>
);

SocialMediaItem.propTypes = {
  className: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  link: React.PropTypes.string,
};

export default SocialMediaItem;
