var React = require('react');
var request = require('superagent');
var Form = require('./Form.react');
var List = require('./List.react');

var Expenses = React.createClass({
  getInitialState: function() {
    return {
      expenses: []
    };
  },

  componentWillMount: function() {
    this._fetchExpenses();
  },

  render: function(){
    return (
      <div>
        <Form create={this._createExpense}/>
        <List items={this.state.expenses} />
      </div>
    )
  },

  ._fetchExpenses: function() {
    request
      .get('/expenses')
      .set('Accept', 'application/json')
      .end(this._handleFetch);
  },

  ._createExpense: function(data) {
    request
      .post('/expenses')
      .send(data)
      .set('Accept', 'application/json')
      .set('X-CSRF-Token', document.querySelector('meta[name="csrf-token"]').content)
      .end(this._handleCreate);
  },

  ._handleFetch: function() {
    if (err) {
      window.alert('There was an error retrieving your transaction');
      return;
    }
    this.setState({ items: res.body });
  },

  ._handleCreate: function() {
    if (err) {
      window.alert('There was an error submitting your transaction');
      return;
    }
    this._fetchExpenses();
  }

});

module.exports = Expenses;
