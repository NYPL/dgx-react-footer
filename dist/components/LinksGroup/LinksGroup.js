'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderLinkItems = function renderLinkItems(data) {
  return data.map(function (item, i) {
    return _react2.default.createElement(
      'li',
      { key: i },
      _react2.default.createElement(
        'a',
        { href: item.link },
        item.name
      )
    );
  });
};

var LinksGroup = function LinksGroup(_ref) {
  var data = _ref.data;
  return _react2.default.createElement(
    'li',
    null,
    _react2.default.createElement(
      'ul',
      { className: 'linkItemList' },
      renderLinkItems(data)
    )
  );
};

LinksGroup.propTypes = {
  data: _propTypes2.default.array
};

exports.default = LinksGroup;