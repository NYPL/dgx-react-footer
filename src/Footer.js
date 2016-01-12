// Import libraries
import React from 'react';
import radium from 'radium';

// Import components
import SocialMediaList from './components/SocialMediaList/SocialMediaList.js';

import data from './footerData.js';

class Footer extends React.Component {
  // Constructor used in ES6
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer id={this.props.id} className={this.props.className}>
        <div id={`${this.props.id}-content`}
          className={`${this.props.className}-content`}>

          <ul className="footerLinks">
            <li>
              <a href="/help/about-nypl">About NYPL</a>
              <ul>
                <li><a href="/help/about-nypl/media-center">Press</a></li>
                <li><a href="/careers">Careers</a></li>
                <li><a href="/spacerental">Space Rental</a></li>
              </ul>
            </li>

            <li>
              <a href="/help/about-nypl/legal-notices/privacy-policy">
                Privacy Policy
              </a>
              <ul>
              <li><a href="/policies">Other Policies</a></li>
              <li><a href="/terms-conditions">Terms & Conditions</a></li>
              <li>
                <a href="/help/about-nypl/leadership/board-trustees">
                  Governance
                </a>
              </li>
              </ul>
            </li>

            <li>
              <a href="/help/about-nypl/legal-notices/rules-and-regulations">
                Rules & Regulations
              </a>
              <ul>
              <li>
                <a href="/help/community-outreach/services-for-persons-with-disabilities">
                  Accessibility
                </a>
              </li>
              <li><a href="/language">Language</a></li>
              </ul>
            </li>

          </ul>

          <SocialMediaList
            data={data.SocialMedia}
            id="SocialMediaList"
            className="socialmedia" />
        </div>

        <div id="copyright" className="copyright">
          <p>© The New York Public Library, {new Date().getFullYear()}</p>
        </div>

        <span className="logoText nypl-icon-logo-type"></span>
      </footer>
    );
  }
}

Footer.propTypes = {
  id: React.PropTypes.string.isRequired,
  className: React.PropTypes.string.isRequired,
};

Footer.defaultProps = {
  id: 'footer',
  className: 'footer',
  label: '',
  lang: 'en',
};

export default radium(Footer);
