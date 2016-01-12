// Import libraries
import React from 'react';
import radium from 'radium';

const styles = {
  SocialMediaLink: {},
  ReplacedText: {},
};

class SocialMediaItem extends React.Component {
  // Constructor used in ES6
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li key="SocialMediaNode" id={this.props.name}>
        <a key="SocialMediaLink"
          className={this.props.className}
          style={styles.SocialMediaLink}
          href={this.props.link}>
          <span className="replaced-text" style={styles.ReplacedText}>
            {this.props.name}
          </span>
        </a>
      </li>
    );
  }
}

SocialMediaItem.propTypes = {
  className: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  link: React.PropTypes.string,
};

export default radium(SocialMediaItem);
