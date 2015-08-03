// ... imports
var React = require('react');
var AnalyticsAppDispatcher = require('../dispatcher/AnalyticsAppDispatcher');
var AnalyticsConstants = require('../constants/AnalyticsConstants');
var ActionTypes = AnalyticsConstants.ActionTypes;
var CHANGE_EVENT = 'change';
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');


var LoginStore = assign({}, EventEmitter.prototype, {

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
  getUser() {
    return this._user;
  },
  getJwt() {
    return this._jwt;
  },
  isLoggedIn() {
    return !!this._user;
  }
});
LoginStore._user = null;
LoginStore._jwt = null;

// First we register to the Dispatcher to listen for actions.
LoginStore.dispatchToken = AnalyticsAppDispatcher.register(
  function(action) {
    switch(action.type) {
      case ActionTypes.CREATE_SESSION_SUCCESS:
        // We get the JWT from the action and save it locally.
        LoginStore._jwt = action.data.secure_token;
        // Then we decode it to get the user information.
        LoginStore._user = action.data.user;
        // And we emit a change to all components that are listening.
        // This method is implemented in the `BaseStore`.
        
        LoginStore.emitChange();
        break;
      default:
        break;
    };
  } 
);


module.exports = LoginStore ;
