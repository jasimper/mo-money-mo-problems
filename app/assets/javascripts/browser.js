var React = require('react');
var Expenses = require('./Expenses.react');
  var browser = function() {
    var pageSelector = document.querySelector('[data-js="wrapper"]');
    if (pageSelector) {
      React.render(<Expenses />, pageSelector)
    }
  };
module.exports = browser;
