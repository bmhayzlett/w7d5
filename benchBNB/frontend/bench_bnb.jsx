var React = require('react');
var ReactDOM = require('react-dom');
var BenchStore = require('./stores/bench');
var ApiUtil = require('./util/api_util');
var Index = require('./components/Index');
var Search = require('./components/search');

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(<Search/>, document.getElementById('content'));
})
