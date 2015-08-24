var React = require('react');
var ChartStore = require( '../../../stores/ChartStore');
var objectAssign = require('object-assign');

var Chart = React.createClass({
  handleDataInXYArrayFormat: function(x_array, y_array) {
    var out = [];
    for (i=0; i < x_array.length ; ++i) {
      out.push({x: x_array[i] , y: y_array[i] }) ;
    } 
    return out ;
  },
  processData: function(data) {
    var self = this ;
    var out = [] ;
    data.forEach(function(entry) {
      var richData = objectAssign({}, entry );
      richData["values"] = self.handleDataInXYArrayFormat( entry.x_values, entry.y_values ) ;
      out.push( richData  );
    });
    console.log(out);
    return out ;
  },

  componentDidMount: function() {
    this.renderChart();
  },

  selectModel: function(model) {
    switch(model) {
    case "boxPlot":
      return nv.models.boxPlot();
    case "distribution":
      return nv.models.distribution();
    case "lineChart":
      return nv.models.lineChart();
    case "multiBarChart":
      return nv.models.multiBarChart();
    case "pieChart":
      return nv.models.pieChart();
    case "scatterChart":
      return nv.models.scatterChart();
    case "stackedAreaChart":
      return nv.models.stackedAreaChart();
    case "sunburstChart":
      return nv.models.sunburstChart();
    default:
      return nv.models.lineChart();
    }
  },

  renderChart: function( ) {
    var self = this ;
    var chartIdLookup = "#chart-".concat(self.props.data.id) ;
    var chartData = ChartStore.getChart(self.props.data.id);
    
    nv.addGraph(function() {
      var chart = self.selectModel(chartData.data.model).options(chartData.data.options);
      var data = self.processData(chartData.data.data);
      d3.select(chartIdLookup)
          .datum(data)
          .call(chart);
      nv.utils.windowResize(chart.update);
    });
  },

  render: function() {
    var chartIdProp = "chart-".concat(this.props.data.id) ;
    return ( 
     <svg id={ chartIdProp }> </svg>
    ) ;
  }

});

module.exports = Chart;

