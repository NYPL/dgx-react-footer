// Import libraries
import React from 'react';
import Radium from 'radium';

// Import components
import SocialMediaList from './components/SocialMediaList/SocialMediaList.js';
import FooterLinkList from './components/FooterLinkList/FooterLinkList.js';

import data from './footerData.js';

class Footer extends React.Component {
  // Constructor used in ES6
  constructor(props) {
    super(props);
  }

  render() {
    let footerLinkLists = data.FooterLinkLists.map((link, i) => {
      return (
        <FooterLinkList
          className={link.ulClass}
          data={link.FooterLinkList}
          key={i} />
      );
    });

    return (
      <footer id={this.props.id} className={this.props.className}>
        <div id={`${this.props.id}-content`}
          className={`${this.props.className}-content`}>
          <div className='footerlinks'>
            {footerLinkLists}
          </div>
          <SocialMediaList
            data={data.SocialMedia}
            id='SocialMediaList'
            className='socialmedia' />
          <div id='copyright' className='copyright'>
            <p>© The New York Public Library, {new Date().getFullYear()}</p>
          </div>
        </div>
        <span className="logoText nypl-icon-logo-type"></span>	    
      </footer>
    );
  }
}

Footer.defaultProps = {
  id: 'footer',
  className: 'footer',
  label: '',
  lang: 'en'
};

export default Radium(Footer);
