var AnalyticsAppDispatcher = require('../dispatcher/AnalyticsAppDispatcher');
var AnalyticsConstants = require('../constants/AnalyticsConstants');
var AnalyticsWebAPIUtils = require('../utils/api/AnalyticsAPIUtils');

var ActionTypes = AnalyticsConstants.ActionTypes;

module.exports = {

  createSession: function(user, password) {
    AnalyticsAppDispatcher.dispatch({
      type: ActionTypes.LOGIN_ATTEMPT,
    });
    AnalyticsWebAPIUtils.createSession(user, password) ;
  },

  listTeams: function() {
    AnalyticsAppDispatcher.dispatch({
      type: ActionTypes.LIST_TEAMS_REQUEST,
    });
    AnalyticsWebAPIUtils.listTeams() ;
  }
};


