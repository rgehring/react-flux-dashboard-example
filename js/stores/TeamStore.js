// ... imports
var React = require('react');
var AnalyticsAppDispatcher = require('../dispatcher/AnalyticsAppDispatcher');
var AnalyticsConstants = require('../constants/AnalyticsConstants');
var ActionTypes = AnalyticsConstants.ActionTypes;


var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var TeamStore = assign({}, EventEmitter.prototype, {

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
  getTeamList() {
    return this._teamList;
  },
});
// set initial state
TeamStore._teamList = [];
TeamStore._activeTeam = null;

// register to the Dispatcher to listen for actions.
TeamStore.dispatchToken = AnalyticsAppDispatcher.register(
  function(action) {
    switch(action.type) {
      case ActionTypes.LIST_TEAMS:
        TeamStore._teamList = action.data;
        TeamStore.emitChange();
        break;
      default:
        break;
    };
  } 
);


module.exports = TeamStore ;


