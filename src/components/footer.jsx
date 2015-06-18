(function () {
    "use strict";
    var React = require('react'),
        Footer = React.createClass({
            render: function () {
                return (
                        <div id="footer">

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
        });
    module.exports = Footer;
}());
