import React from 'react';
import Radium from 'radium';

class Footer extends React.Class {
    render () {
	let styles = {
	    base: {
		background: 'red',
	    }
	};
	
        return (
                <div id="footer" style={styles.base}>
		
                <div id="footerLinks">
                <ul id="footerColumn1">
                <li>About</li>
                <li>Press</li>
                <li>Careers</li>
                <li>Space Rental</li>
                </ul>
		
                <ul id="footerColumn2">
                <li>Shop</li>
                <li>Governance</li>
                <li>Press</li>
                </ul>
		
                <ul id="footerColumn3">
                <li>Terms &amp; Conditions</li>
                <li>Accessibility</li>
                <li>Language</li>
                </ul>
                </div>
		
                <div>© The New York Public Library, 2015</div>
		</div>
        );
    }
};

module.exports = Radiuma(Footer);

