var React = require('react');
var BenchStore = require('../stores/bench');
var Index = require('./Index');

var Map = React.createClass({
  getInitialState: function () {
    return {
      benches: BenchStore.all()
    }
  },

  componentDidMount: function () {
    this.benchToken = BenchStore.addListener(this._onChange);

    var mapDOMNode = this.refs.map;
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);

    var that = this.map

    this.mapToken = this.map.addListener('idle', function (){
      this.bounds = this.map.getBounds();

      var northEast = this.bounds.getNorthEast();
      var southWest = this.bounds.getSouthWest();
      var bounds = {northEast: {lat: northEast.lat()}}
      ApiUtil.fetchBenches(northEast,southWest);
    }.bind(this));



  },

  _onChange: function() {
    var that = this;
    this.setState({benches: BenchStore.all()});
    this.state.benches.forEach(function (bench) {
      // helper function to add markers
      new google.maps.Marker({
        position: {lat: bench.lat, lng: bench.lon},
        map: that.map
      });
    });
  },

  render: function(){

    return <div className="map" ref="map"></div>
  },

});

window.Map = Map;

module.exports = Map;
