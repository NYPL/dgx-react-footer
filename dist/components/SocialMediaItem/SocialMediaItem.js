"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SocialMediaItem = function SocialMediaItem(_ref) {
  var id = _ref.id;
  var className = _ref.className;
  var name = _ref.name;
  var link = _ref.link;
  return _react2.default.createElement(
    "li",
    null,
    _react2.default.createElement(
      "a",
      {
        className: className,
        href: link
      },
      _react2.default.createElement(
        "span",
        { className: "replaced-text" },
        name
      )
    )
  );
}; // Import libraries


SocialMediaItem.propTypes = {
  className: _react2.default.PropTypes.string,
  name: _react2.default.PropTypes.string,
  link: _react2.default.PropTypes.string
};

exports.default = SocialMediaItem;