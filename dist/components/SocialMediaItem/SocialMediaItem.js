'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SocialMediaItem = function SocialMediaItem(_ref) {
  var className = _ref.className,
      name = _ref.name,
      link = _ref.link;
  return _react2.default.createElement(
    'li',
    null,
    _react2.default.createElement(
      'a',
      {
        className: className,
        href: link
      },
      _react2.default.createElement(
        'span',
        { className: 'replaced-text' },
        name
      )
    )
  );
};

SocialMediaItem.propTypes = {
  className: _propTypes2.default.string,
  name: _propTypes2.default.string,
  link: _propTypes2.default.string
};

exports.default = SocialMediaItem;