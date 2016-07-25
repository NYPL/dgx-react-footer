import React from 'react';
import { render } from 'react-dom';
import Footer from './Footer.jsx';
 
import './styles/styles.scss';

/* app.jsx
 * Used for local development of React Components
 */
render(<Footer id="footer" className="footer" />, document.getElementById('footerPreview'));
