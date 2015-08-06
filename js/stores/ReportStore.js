// ... imports
var React = require('react');
var AnalyticsAppDispatcher = require('../dispatcher/AnalyticsAppDispatcher');
var AnalyticsConstants = require('../constants/AnalyticsConstants');
var ActionTypes = AnalyticsConstants.ActionTypes;


var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var ReportStore = assign({}, EventEmitter.prototype, {

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
  getReportList() {
    return this._reportList;
  },
});
// set initial state
ReportStore._reportList = [];
ReportStore._activeReport = null;

// register to the Dispatcher to listen for actions.
ReportStore.dispatchToken = AnalyticsAppDispatcher.register(
  function(action) {
    switch(action.type) {
      case ActionTypes.LIST_REPORTS:
        ReportStore._reportList = action.data;
        ReportStore.emitChange();
        break;
      default:
        break;
    };
  } 
);


module.exports = ReportStore ;

