// Import libraries
import React from 'react';
import { map as _map } from 'underscore';

const renderLinkItems = (data) =>
  _map(data, (item, i) =>
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
  data: React.PropTypes.array,
};

export default LinksGroup;
