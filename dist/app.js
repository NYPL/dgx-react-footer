'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _FooterJs = require('./Footer.js');

var _FooterJs2 = _interopRequireDefault(_FooterJs);

require('./styles/styles.scss');

/* app.jsx
 * Used for local development of React Components
 */
_reactDom2['default'].render(_react2['default'].createElement(_FooterJs2['default']), document.getElementById('footer'));