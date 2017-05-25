import React from 'react';
import PropTypes from 'prop-types';

const renderLinkItems = (data) =>
  data.map((item, i) =>
    <li key={i}>
      <a href={item.link}>
        {item.name}
      </a>
    </li>
  );

const LinksGroup = ({ data }) => (
  <li>
    <ul className="linkItemList">
      {renderLinkItems(data)}
    </ul>
  </li>
);

LinksGroup.propTypes = {
  data: PropTypes.array,
};

export default LinksGroup;
