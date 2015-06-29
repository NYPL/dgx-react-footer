import React from 'react';
import Radium from 'radium';

class Footer extends React.Component {
    render () {
	
        return (
                <div id="footer" style={styles.base}>
		
                <div id="footerLinks" style={styles.footerLinks}>
                <ul id="footerColumn1" style={styles.columns}>
                <li>About</li>
                <li>Press</li>
                <li>Careers</li>
                <li>Space Rental</li>
                </ul>
		
                <ul id="footerColumn2" style={styles.columns}>
                <li>Shop</li>
                <li>Governance</li>
                <li>Press</li>
                </ul>
		
                <ul id="footerColumn3" style={styles.columns}>
                <li>Terms &amp; Conditions</li>
                <li>Accessibility</li>
                <li>Language</li>
                </ul>
                </div>
		
                <div style={styles.dim}>© The New York Public Library, 2015</div>
	    </div>
	);
    }
}

const styles = {
    base: {
	background: '#0F729F',
	color: 'white',
	paddingLeft: '236px'
    },
    footerLinks: {
	display: 'flex',
	lineHeight: 2,
	marginBottom: "8.75em",
	paddingTop: "1em"
    },
    columns: {
	width: '10em'
    },
    dim: {
	color: '#699CBA'
    }
};

export default Radium(Footer);

