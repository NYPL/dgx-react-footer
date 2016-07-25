'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FooterLinks = require('./components/FooterLinks/FooterLinks.js');

var _FooterLinks2 = _interopRequireDefault(_FooterLinks);

var _SocialMediaList = require('./components/SocialMediaList/SocialMediaList.js');

var _SocialMediaList2 = _interopRequireDefault(_SocialMediaList);

var _footerConfig = require('./footerConfig.js');

var _footerConfig2 = _interopRequireDefault(_footerConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import libraries
var Footer = function Footer(props) {
  return _react2.default.createElement(
    'footer',
    { id: props.id, className: props.className },
    _react2.default.createElement(
      'div',
      { className: props.className + '-content' },
      _react2.default.createElement(_FooterLinks2.default, {
        className: 'footerLinks',
        data: _footerConfig2.default.nyplLinks
      }),
      _react2.default.createElement(_SocialMediaList2.default, {
        data: _footerConfig2.default.socialMedia,
        id: 'SocialMediaList',
        className: 'socialMedia'
      })
    ),
    _react2.default.createElement(
      'div',
      { id: 'copyright', className: 'copyright' },
      _react2.default.createElement(
        'p',
        null,
        '© The New York Public Library, ',
        new Date().getFullYear()
      )
    ),
    _react2.default.createElement('span', { className: 'logoText nypl-icon-logo-type' })
  );
};

// Import static data


// Import components


Footer.propTypes = {
  id: _react2.default.PropTypes.string,
  className: _react2.default.PropTypes.string
};

Footer.defaultProps = {
  id: 'footer',
  className: 'footer'
};

exports.default = Footer;