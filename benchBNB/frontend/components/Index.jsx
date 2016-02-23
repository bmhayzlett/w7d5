var React = require('react');
var BenchStore = require('../stores/bench');
var ApiUtil = require('../util/api_util');

var Index = React.createClass({
  getInitialState: function () {
    return {
      benches: BenchStore.all()
    }
  },

  componentDidMount: function () {
    this.indexToken = BenchStore.addListener(this._onChange)
  },

  componentWillUnmount: function () {
    this.indexToken.remove();
  },

  _onChange: function() {
    this.setState({benches: BenchStore.all()});
  },

  render: function () {
    return <div>TEST</div>
  }

});

window.Index = Index

module.exports = Index;
