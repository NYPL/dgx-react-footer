'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _underscore = require('underscore');

var _SocialMediaItem = require('./../SocialMediaItem/SocialMediaItem.js');

var _SocialMediaItem2 = _interopRequireDefault(_SocialMediaItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderSocialMediaItems = function renderSocialMediaItems(data) {
  return (0, _underscore.map)(data, function (item, i) {
    return _react2.default.createElement(_SocialMediaItem2.default, {
      id: item.id,
      className: item.className,
      name: item.name,
      link: item.link,
      key: i
    });
  });
}; // Import libraries


var SocialMediaList = function SocialMediaList(_ref) {
  var data = _ref.data;
  var id = _ref.id;
  var className = _ref.className;
  return _react2.default.createElement(
    'ul',
    {
      id: id,
      className: className
    },
    renderSocialMediaItems(data)
  );
};

SocialMediaList.propTypes = {
  className: _react2.default.PropTypes.string,
  id: _react2.default.PropTypes.string,
  data: _react2.default.PropTypes.array
};

exports.default = SocialMediaList;