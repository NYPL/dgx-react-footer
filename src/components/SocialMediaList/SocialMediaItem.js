// Import libraries
import React from 'react';
import radium from 'radium';

const styles = {
  SocialMediaLink: {},
  ReplacedText: {},
};

const SocialMediaItem = (props) => (
  <li key="SocialMediaNode" id={props.name}>
    <a key="SocialMediaLink"
      className={props.className}
      style={styles.SocialMediaLink}
      href={props.link}>
      <span className="replaced-text" style={styles.ReplacedText}>
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

export default radium(SocialMediaItem);
