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
    <a href={data[0].link}>{data[0].name}</a>
    <ul>
      {renderLinkItems(data)}
    </ul>
  </li>
);

export default LinksGroup;