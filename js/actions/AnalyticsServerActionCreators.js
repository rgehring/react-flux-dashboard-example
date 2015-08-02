/**
 This file publishes the message that server data is received
 */

var AnalyticsAppDispatcher = require('../dispatcher/AnalyticsAppDispatcher');
var AnalyticsConstants = require('../constants/AnalyticsConstants');
var AnalyticsWebAPIUtils = require('../utils/AnalyticsWebAPIUtils');
var AnalyticsMessageUtils = require('../utils/AnalyticsMessageUtils');

var ActionTypes = AnalyticsConstants.ActionTypes;

module.exports = {

  listReports: function(response) {
    // dispatch the action!
    AnalyticsAppDispatcher.dispatch({
      type: ActionTypes.LIST_REPORTS,
      data: response
    });
  },
  listCharts: function(response) {
    // dispatch the action!
    AnalyticsAppDispatcher.dispatch({
      type: ActionTypes.LIST_CHARTS,
      data: response
    });
  },
  listSession: function(response) {
    // dispatch the action!
    AnalyticsAppDispatcher.dispatch({
      type: ActionTypes.LIST_SESSION,
      data: response
    });
  }
  listTeams: function(response) {
    // dispatch the action!
    AnalyticsAppDispatcher.dispatch({
      type: ActionTypes.LIST_TEAMS,
      data: response
    });
  }
  createSession: function(response) {
    // dispatch the action!
    AnalyticsAppDispatcher.dispatch({
      type: ActionTypes.CREATE_SESSION,
      data: response
    });
  }
  destroySession: function(response) {
    // dispatch the action!
    AnalyticsAppDispatcher.dispatch({
      type: ActionTypes.DESTROY_SESSION,
      data: response
    });
  }

};

