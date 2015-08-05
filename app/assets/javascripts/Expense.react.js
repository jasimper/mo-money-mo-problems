var React = require('react');

var Expense = React.createClass({
  render: function(){
    return (
      <ul>
        <li>
          {this.props.data.date()}
        </li>
        <li>
          {this.props.data.description()}
        </li>
        <li>
          {this.props.data.deductedFrom()}
        </li>
        <li>
          {this.props.data.amount()}
        </li>
      </ul>
    )
  }
});

module.exports = Expense;
