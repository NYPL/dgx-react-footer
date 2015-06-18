(function () {
    "use strict";
    var React = require('react'),
        Footer = React.createClass({displayName: "Footer",
            render: function () {
                return (
                        React.createElement("div", {id: "footer"}, 

                        React.createElement("div", {id: "footerLinks"}, 
                        React.createElement("ul", {id: "footerColumn1"}, 
                        React.createElement("li", null, "About"), 
                        React.createElement("li", null, "Press"), 
                        React.createElement("li", null, "Careers"), 
                        React.createElement("li", null, "Space Rental")
                        ), 

                        React.createElement("ul", {id: "footerColumn2"}, 
                        React.createElement("li", null, "Shop"), 
                        React.createElement("li", null, "Governance"), 
                        React.createElement("li", null, "Press")
                        ), 

                        React.createElement("ul", {id: "footerColumn3"}, 
                        React.createElement("li", null, "Terms & Conditions"), 
                        React.createElement("li", null, "Accessibility"), 
                        React.createElement("li", null, "Language")
                        )
                        ), 

                        React.createElement("div", null, "© The New York Public Library, 2015")
			)
                );
            }
        });
    module.exports = Footer;
}());
