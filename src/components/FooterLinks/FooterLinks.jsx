// Import libraries
import React from 'react';
import { map as _map } from 'underscore';

import LinksGroup from './../LinksGroup/LinksGroup.jsx';

const renderLinksGroups = (data) =>
  _map(data, (item, i) =>
    <LinksGroup data={item} key={i} />
  );

const FooterLinks = ({ data, className }) => (
  <ul className={className}>
    {renderLinksGroups(data)}
  </ul>
);

FooterLinks.propTypes = {
  data: React.PropTypes.array,
  className: React.PropTypes.string,
};

export default FooterLinks;
