// Import libraries
import React from 'react';
import { map as _map } from 'underscore';

import SocialMediaItem from './../SocialMediaItem/SocialMediaItem.jsx';

const renderSocialMediaItems = (data) =>
  _map(data, (item, i) =>
    <SocialMediaItem
      className={item.className}
      name={item.name}
      link={item.link}
      key={i}
    />
  );

const SocialMediaList = ({ data, id, className }) =>
  <ul
    id={id}
    className={className}
  >
    {renderSocialMediaItems(data)}
  </ul>;

SocialMediaList.propTypes = {
  className: React.PropTypes.string.isRequired,
  id: React.PropTypes.string,
  data: React.PropTypes.array,
};

export default SocialMediaList;
