// Import libraries
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

// Import components

var _componentsSocialMediaListSocialMediaListJs = require('./components/SocialMediaList/SocialMediaList.js');

var _componentsSocialMediaListSocialMediaListJs2 = _interopRequireDefault(_componentsSocialMediaListSocialMediaListJs);

var _componentsFooterLinkListFooterLinkListJs = require('./components/FooterLinkList/FooterLinkList.js');

var _componentsFooterLinkListFooterLinkListJs2 = _interopRequireDefault(_componentsFooterLinkListFooterLinkListJs);

var _footerDataJs = require('./footerData.js');

var _footerDataJs2 = _interopRequireDefault(_footerDataJs);

var Footer = (function (_React$Component) {
  // Constructor used in ES6

  function Footer(props) {
    _classCallCheck(this, Footer);

    _get(Object.getPrototypeOf(Footer.prototype), 'constructor', this).call(this, props);
  }

  _inherits(Footer, _React$Component);

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      var footerLinkLists = _footerDataJs2['default'].FooterLinkLists.map(function (link, i) {
        return _react2['default'].createElement(_componentsFooterLinkListFooterLinkListJs2['default'], {
          className: link.ulClass,
          data: link.FooterLinkList,
          key: i });
      });

      return _react2['default'].createElement(
        'footer',
        { id: this.props.id, className: this.props.className },
        _react2['default'].createElement(
          'div',
          { id: '' + this.props.id + '-content',
            className: '' + this.props.className + '-content' },
          _react2['default'].createElement(_componentsSocialMediaListSocialMediaListJs2['default'], {
            data: _footerDataJs2['default'].SocialMedia,
            id: 'SocialMediaList',
            className: 'socialmedia' }),
          _react2['default'].createElement(
            'div',
            { className: 'footerlinks' },
            footerLinkLists
          ),
          _react2['default'].createElement(
            'div',
            { id: 'copyright', className: 'copyright' },
            _react2['default'].createElement(
              'p',
              null,
              '© The New York Public Library, ',
              new Date().getFullYear()
            )
          )
        )
      );
    }
  }]);

  return Footer;
})(_react2['default'].Component);

Footer.defaultProps = {
  id: 'footer',
  className: 'footer',
  label: '',
  lang: 'en'
};

exports['default'] = (0, _radium2['default'])(Footer);
module.exports = exports['default'];