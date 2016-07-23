// Import libraries
import React from 'react';
import { map as _map } from 'underscore';

import SocialMediaItem from './../SocialMediaItem/SocialMediaItem.jsx';

const renderSocialMediaItems = (data, i) => {
  _map(data, (item) => 
    <SocialMediaItem
      name={item.name}
      link={item.link}
      className={item.className}
      key={i}
    />
  );
};

const SocialMediaList = (data, id, className) => {
  return (
    <ul 
      id={id}
      className={className}
    >
      {renderSocialMediaItems(data)}
    </ul>
  );
};

SocialMediaList.propTypes = {
  className: React.PropTypes.string.isRequired,
  link: React.PropTypes.string,
  data: React.PropTypes.array,
};

export default SocialMediaList;
