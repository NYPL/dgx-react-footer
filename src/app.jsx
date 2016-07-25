import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer.jsx';
 
import './styles/styles.scss';

import a11y from 'react-a11y';

a11y(React, { ReactDOM, includeSrcNode: true });

/* app.jsx
 * Used for local development of React Components
 */
ReactDOM.render(<Footer id="footer" className="footer" />, document.getElementById('footer'));
