// Import libraries
import React from 'react';

// Import components
import LinksGroup from './components/LinksGroup/LinksGroup.jsx';
import SocialMediaList from './components/SocialMediaList/SocialMediaList.jsx';

// Import static data
import footerConfig from './footerConfig.js';

const Footer = (props) => (
  <footer id={props.id} className={props.className}>
    <div className={`${props.className}-content`}>
      <ul className="footerLinks">
        <LinksGroup data={footerConfig.column01} />
        <LinksGroup data={footerConfig.column02} />
        <LinksGroup data={footerConfig.column03} />
      </ul>

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
