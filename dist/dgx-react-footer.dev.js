(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Footer = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function () {
    "use strict";
    var React = window.React || require('react'),
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


},{"react":"react"}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvc2VhbnJlZG1vbmQvY29kZS9ueXBsL2RpZ2lsaW9uL2RneC1yZWFjdC1mb290ZXIvc3JjL2Zvb3Rlci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxDQUFDLFlBQVk7SUFDVCxZQUFZLENBQUM7SUFDYixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQ3hCLDRCQUE0QixzQkFBQTtZQUN4QixNQUFNLEVBQUUsWUFBWTtnQkFDaEI7QUFDaEIsd0JBQXdCLG9CQUFBLEtBQUksRUFBQSxDQUFBLENBQUMsRUFBQSxFQUFFLENBQUMsUUFBUyxDQUFBLEVBQUE7O3dCQUVqQixvQkFBQSxLQUFJLEVBQUEsQ0FBQSxDQUFDLEVBQUEsRUFBRSxDQUFDLGFBQWMsQ0FBQSxFQUFBO3dCQUN0QixvQkFBQSxJQUFHLEVBQUEsQ0FBQSxDQUFDLEVBQUEsRUFBRSxDQUFDLGVBQWdCLENBQUEsRUFBQTt3QkFDdkIsb0JBQUEsSUFBRyxFQUFBLElBQUMsRUFBQSxPQUFVLENBQUEsRUFBQTt3QkFDZCxvQkFBQSxJQUFHLEVBQUEsSUFBQyxFQUFBLE9BQVUsQ0FBQSxFQUFBO3dCQUNkLG9CQUFBLElBQUcsRUFBQSxJQUFDLEVBQUEsU0FBWSxDQUFBLEVBQUE7d0JBQ2hCLG9CQUFBLElBQUcsRUFBQSxJQUFDLEVBQUEsY0FBaUIsQ0FBQTtBQUM3Qyx3QkFBNkIsQ0FBQSxFQUFBOzt3QkFFTCxvQkFBQSxJQUFHLEVBQUEsQ0FBQSxDQUFDLEVBQUEsRUFBRSxDQUFDLGVBQWdCLENBQUEsRUFBQTt3QkFDdkIsb0JBQUEsSUFBRyxFQUFBLElBQUMsRUFBQSxNQUFTLENBQUEsRUFBQTt3QkFDYixvQkFBQSxJQUFHLEVBQUEsSUFBQyxFQUFBLFlBQWUsQ0FBQSxFQUFBO3dCQUNuQixvQkFBQSxJQUFHLEVBQUEsSUFBQyxFQUFBLE9BQVUsQ0FBQTtBQUN0Qyx3QkFBNkIsQ0FBQSxFQUFBOzt3QkFFTCxvQkFBQSxJQUFHLEVBQUEsQ0FBQSxDQUFDLEVBQUEsRUFBRSxDQUFDLGVBQWdCLENBQUEsRUFBQTt3QkFDdkIsb0JBQUEsSUFBRyxFQUFBLElBQUMsRUFBQSxvQkFBMkIsQ0FBQSxFQUFBO3dCQUMvQixvQkFBQSxJQUFHLEVBQUEsSUFBQyxFQUFBLGVBQWtCLENBQUEsRUFBQTt3QkFDdEIsb0JBQUEsSUFBRyxFQUFBLElBQUMsRUFBQSxVQUFhLENBQUE7d0JBQ1osQ0FBQTtBQUM3Qix3QkFBOEIsQ0FBQSxFQUFBOzt3QkFFTixvQkFBQSxLQUFJLEVBQUEsSUFBQyxFQUFBLHFDQUF5QyxDQUFBO0dBQzdELENBQUE7a0JBQ1M7YUFDTDtTQUNKLENBQUMsQ0FBQztJQUNQLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0NBQzNCLEVBQUUsRUFBRSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24gKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIHZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0JyksXG4gICAgICAgIEZvb3RlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXJMaW5rc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGlkPVwiZm9vdGVyQ29sdW1uMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkFib3V0PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5QcmVzczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q2FyZWVyczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+U3BhY2UgUmVudGFsPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBpZD1cImZvb3RlckNvbHVtbjJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TaG9wPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Hb3Zlcm5hbmNlPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5QcmVzczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgaWQ9XCJmb290ZXJDb2x1bW4zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+VGVybXMgJmFtcDsgQ29uZGl0aW9uczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+QWNjZXNzaWJpbGl0eTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+TGFuZ3VhZ2U8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PsKpIFRoZSBOZXcgWW9yayBQdWJsaWMgTGlicmFyeSwgMjAxNTwvZGl2PlxuXHRcdFx0PC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBGb290ZXI7XG59KCkpO1xuIl19
