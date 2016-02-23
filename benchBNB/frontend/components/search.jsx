var React = require('react');
var Index = require('./Index');
var Map = require('./map')

var Search = React.createClass ({

  render: function() {
    return <div>
      <Index/>
      <Map/>
    </div>
  }

});

module.exports = Search;
