// Import libraries
import React from 'react';

// Import components
import FooterLinks from './components/FooterLinks/FooterLinks.js';
import SocialMediaList from './components/SocialMediaList/SocialMediaList.js';

// Import static data
import footerConfig from './footerConfig.js';

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
    <span className="logoText nypl-icon-logo-type"></span>
  </footer>
);

Footer.propTypes = {
  id: React.PropTypes.string,
  className: React.PropTypes.string,
};

Footer.defaultProps = {
  id: 'footer',
  className: 'footer',
};

export default Footer;
