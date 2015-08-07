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

  listCharts: function( team_slug, report_slug, page  ) {
    AnalyticsAppDispatcher.dispatch({
      type: ActionTypes.LIST_CHARTS_REQUEST,
    });
    AnalyticsWebAPIUtils.listCharts( team_slug, report_slug, page  ) ;
  },

  listTeams: function() {
    AnalyticsAppDispatcher.dispatch({
      type: ActionTypes.LIST_TEAMS_REQUEST,
    });
    AnalyticsWebAPIUtils.listTeams() ;
  }
};


