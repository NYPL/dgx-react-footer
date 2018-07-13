import React from 'react';
import PropTypes from 'prop-types';
import { LionLogoWithText } from '@nypl/dgx-svg-icons';

import FooterLinks from './components/FooterLinks/FooterLinks';
import SocialMediaList from './components/SocialMediaList/SocialMediaList';
import footerConfig from './footerConfig';

const Footer = (props) => (
  <footer id={props.id} className={props.className} role="contentinfo">
    <div className={`${props.className}-content`}>
      <FooterLinks
        className="footerLinks"
        data={footerConfig.nyplLinks}
      />
      <SocialMediaList
        data={footerConfig.socialMedia}
        id="SocialMediaList"
        className="socialMedia"
      />
    </div>
    <div id="copyright" className="copyright">
      <p>© The New York Public Library, {new Date().getFullYear()}</p>
    </div>
    <span className="logoText icon-logo-type">
      <LionLogoWithText
        title="New York Public Library"
        ariaHidden={false}
        focusable={false}
      />
    </span>
  </footer>
);

Footer.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
};

Footer.defaultProps = {
  id: 'footer',
  className: 'footer',
};

export default Footer;
