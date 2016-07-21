// Import libraries
import React from 'react';
import { map as _map } from 'underscore';

import LinksGroup from './../LinksGroup/LinksGroup.jsx';

const renderLinksGroups = (data) => {
  return _map(data, (item, i) => {
    return (
      <LinksGroup data={item} key={i} />
    );
  });
};

const FooterLinks = ({ data, className }) => (
  <ul className={className}>
    {renderLinksGroups(data)}
  </ul>
);

export default FooterLinks;