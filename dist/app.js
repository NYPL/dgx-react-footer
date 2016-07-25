'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _Footer = require('./Footer.jsx');

var _Footer2 = _interopRequireDefault(_Footer);

require('./styles/styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* app.jsx
 * Used for local development of React Components
 */
(0, _reactDom.render)(_react2.default.createElement(_Footer2.default, { id: 'footer', className: 'footer' }), document.getElementById('footerPreview'));