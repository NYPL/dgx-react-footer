import React from 'react';
import { render } from 'react-dom';
import Footer from './Footer.jsx';
 
import './styles/styles.scss';

import a11y from 'react-a11y';

a11y(React, { render, includeSrcNode: true });

/* app.jsx
 * Used for local development of React Components
 */
render(<Footer id="footer" className="footer" />, document.getElementById('footer'));
