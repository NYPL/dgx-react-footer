"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SocialMediaItem = function SocialMediaItem(props) {
  return _react2.default.createElement(
    "li",
    { key: "SocialMediaNode", id: props.name },
    _react2.default.createElement(
      "a",
      {
        key: "SocialMediaLink",
        className: props.className,
        href: props.link
      },
      _react2.default.createElement(
        "span",
        { className: "replaced-text" },
        props.name
      )
    )
  );
}; // Import libraries


SocialMediaItem.propTypes = {
  className: _react2.default.PropTypes.string.isRequired,
  name: _react2.default.PropTypes.string.isRequired,
  link: _react2.default.PropTypes.string
};

exports.default = SocialMediaItem;