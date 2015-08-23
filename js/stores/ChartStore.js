// ... imports
var AnalyticsAppDispatcher = require('../dispatcher/AnalyticsAppDispatcher');
var AnalyticsConstants = require('../constants/AnalyticsConstants');
var ActionTypes = AnalyticsConstants.ActionTypes;
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var CHANGE_EVENT = 'change';


var ChartStore = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  // Just getters for the properties it got from the action.
  getChartList: function() {
    return this._chartList;
  },
  getChart: function(chartId) {
    var self = this ;
      for (var i = 0; i < self._chartList.length; i++) {
        if (self._chartList[i].id === chartId) {
          var out = self._chartList[i];
          return out ;
        }
      }   
    return null;
  }
});
// set initial state
ChartStore._chartList = [];
ChartStore._activeChart = null;

// register to the Dispatcher to listen for actions.
ChartStore.dispatchToken = AnalyticsAppDispatcher.register(
  function(action) {
    switch(action.type) {
      case ActionTypes.LIST_CHARTS:
        ChartStore._chartList = action.data.charts;
        ChartStore.emitChange();
        break;
      default:
        break;
    };
  } 
);


module.exports = ChartStore ;



