var React = require('react');
var ReactDOM = require('react-dom');
var BenchStore = require('./stores/bench');
var ApiUtil = require('./util/api_util');
var Index = require('./components/Index');

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(<Index/>, document.getElementById('content'));
})
