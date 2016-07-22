'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SocialMediaItem = require('./../SocialMediaItem/SocialMediaItem.jsx');

var _SocialMediaItem2 = _interopRequireDefault(_SocialMediaItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import libraries
var SocialMediaList = function SocialMediaList(props) {
  var socialMediaItems = props.data.map(function (node, i) {
    return _react2.default.createElement(_SocialMediaItem2.default, {
      name: node.name,
      link: node.link,
      className: node.className,
      key: i
    });
  });

  return _react2.default.createElement(
    'ul',
    { className: props.className },
    socialMediaItems
  );
};

SocialMediaList.propTypes = {
  className: _react2.default.PropTypes.string.isRequired,
  link: _react2.default.PropTypes.string,
  data: _react2.default.PropTypes.array
};

exports.default = SocialMediaList;