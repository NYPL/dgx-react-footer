'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import libraries
var renderLinkItems = function renderLinkItems(data) {
  return (0, _underscore.map)(data, function (item, i) {
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
  data: _react2.default.PropTypes.array
};

exports.default = LinksGroup;