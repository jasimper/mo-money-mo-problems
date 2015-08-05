var React = require('react');

var Form = React.createClass({
  render: function(){
    return (
      <form onSubmit={this._handleSubmit}>
        <div>
          <label htmlFor="date">Transaction Date:</label>
          <input id="date" ref="date" />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input id="description" ref="description" />
        </div>
        <div>
          <label htmlFor="deducted_from">Deducted From?:</label>
          <input id="deducted_from" ref="deductedFrom" />
        </div>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input id="amount" ref="amount" />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  },

  _handleSubmit(event) {
    event.preventDefault();
    var data = {
    date: this.refs.date.getDOMNode().value.trim(),
    description: this.refs.description.getDOMNode().value.trim(),
    deducted_from: this.refs.deductedFrom.getDOMNode().value.trim(),
    amount: this.refs.amount.getDOMNode().value.trim(),
  }
  this.props.create(data);
}
  }
});

module.exports = Form;
