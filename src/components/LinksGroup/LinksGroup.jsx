// Import libraries
import React from 'react';
import { map as _map } from 'underscore';

const renderLinkItems = (data) => {
  return _map(data, (item, i) => {
    return (
      <li key={i}>
        <a href={item.link}>
          {item.name}
        </a>
      </li>
    );
  });
};

const LinksGroup = ({ data }) => (
  <li>
    <ul className="linkItemList">
      {renderLinkItems(data)}
    </ul>
  </li>
);

export default LinksGroup;