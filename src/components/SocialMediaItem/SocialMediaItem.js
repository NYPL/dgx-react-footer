import React from 'react';
import PropTypes from 'prop-types';
import {
  TwitterIcon,
  FaceBookIcon,
  InstagramIcon,
  TumblrIcon,
  YoutubeIcon,
} from '@nypl/dgx-svg-icons';

const availableIcons = {
  TwitterIcon,
  FaceBookIcon,
  InstagramIcon,
  TumblrIcon,
  YoutubeIcon,
};

const SocialMediaItem = ({ className, name, link, component, iconId }) =>
  <li>
    <a
      className={className}
      href={link}
    >
      {
        React.createElement(
          availableIcons[component],
          { title: name, ariaHidden: false, iconId }
        )
      }
    </a>
  </li>;

SocialMediaItem.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  link: PropTypes.string,
};

export default SocialMediaItem;
