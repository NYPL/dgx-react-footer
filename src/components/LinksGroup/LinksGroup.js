import React from 'react';
import PropTypes from 'prop-types';

const convertUrlRelative = (url) => {
  if (typeof url !== 'string') {
    return '#';
  }
  const regex = new RegExp(/^http(s)?\:\/\/(www.)?nypl.org/i);
  // Test regex matching pattern
  return (regex.test(url)) ? url.replace(regex, '') : url;
};

const renderLinkItems = (data, urlType) =>
  data.map((item, i) =>
    <li key={i}>
      <a 
        href={(urlType === 'absolute') ? item.link : convertUrlRelative(item.link)}
      >
        {item.name}
      </a>
    </li>
  );

const LinksGroup = ({ data, urlType }) => (
  <li>
    <ul className="linkItemList">
      {renderLinkItems(data, urlType)}
    </ul>
  </li>
);

LinksGroup.propTypes = {
  data: PropTypes.array,
  urlType: PropTypes.string,
};

export default LinksGroup;
