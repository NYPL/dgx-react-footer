'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _underscore = require('underscore');

var _LinksGroup = require('./../LinksGroup/LinksGroup.js');

var _LinksGroup2 = _interopRequireDefault(_LinksGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderLinksGroups = function renderLinksGroups(data) {
  return (0, _underscore.map)(data, function (item, i) {
    return _react2.default.createElement(_LinksGroup2.default, { data: item, key: i });
  });
}; // Import libraries


var FooterLinks = function FooterLinks(_ref) {
  var data = _ref.data;
  var className = _ref.className;
  return _react2.default.createElement(
    'ul',
    { className: className },
    renderLinksGroups(data)
  );
};

FooterLinks.propTypes = {
  data: _react2.default.PropTypes.array,
  className: _react2.default.PropTypes.string
};

exports.default = FooterLinks;