// Import libraries
import React from 'react';
import PropTypes from 'prop-types';
import LinksGroup from './../LinksGroup/LinksGroup';

const renderLinksGroups = (data) =>
  data.map((item, i) =>
    <LinksGroup data={item} key={i} />
  );

const FooterLinks = ({ data, className }) => (
  <ul className={className}>
    {renderLinksGroups(data)}
  </ul>
);

FooterLinks.propTypes = {
  data: PropTypes.array,
  className: PropTypes.string,
};

export default FooterLinks;
