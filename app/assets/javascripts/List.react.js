var React = require('react');
var Expense = require('./Expense.react');

var List = React.createClass({
  render: function(){
    return (
      <div>
        {this._buildExpenses()}
      </div>
    )
  },

  _buildExpenses: function() {
    return this.props.items.map(function(item) {
      return <Expense data={item} key={item.description} />
    })
  }

});

module.exports = List;
