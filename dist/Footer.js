'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _SocialMediaList = require('./components/SocialMediaList/SocialMediaList.js');

var _SocialMediaList2 = _interopRequireDefault(_SocialMediaList);

var _footerData = require('./footerData.js');

var _footerData2 = _interopRequireDefault(_footerData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import components
// Import libraries


var Footer = function Footer(props) {
  return _react2.default.createElement(
    'footer',
    { id: props.id, className: props.className },
    _react2.default.createElement(
      'div',
      { className: props.className + '-content' },
      _react2.default.createElement(
        'ul',
        { className: 'footerLinks' },
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: '/help/about-nypl' },
            'About NYPL'
          ),
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '/help/about-nypl/media-center' },
                'Press'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '/careers' },
                'Careers at NYPL'
              )
            )
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: '/help/about-nypl/legal-notices/privacy-policy' },
            'Privacy Policy'
          ),
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '/policies' },
                'Other Policies'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '/terms-conditions' },
                'Terms & Conditions'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '/help/about-nypl/leadership/board-trustees' },
                'Governance'
              )
            )
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: '/help/about-nypl/legal-notices/rules-and-regulations' },
            'Rules & Regulations'
          ),
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '/help/community-outreach/services-for-persons-with-disabilities' },
                'Accessibility'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '/language' },
                'Language'
              )
            )
          )
        )
      ),
      _react2.default.createElement(_SocialMediaList2.default, {
        data: _footerData2.default.SocialMedia,
        id: 'SocialMediaList',
        className: 'socialMedia' })
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

Footer.propTypes = {
  id: _react2.default.PropTypes.string,
  className: _react2.default.PropTypes.string
};

Footer.defaultProps = {
  id: 'footer',
  className: 'footer'
};

exports.default = (0, _radium2.default)(Footer);