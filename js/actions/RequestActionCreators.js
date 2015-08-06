var AnalyticsAppDispatcher = require('../dispatcher/AnalyticsAppDispatcher');
var AnalyticsConstants = require('../constants/AnalyticsConstants');
var AnalyticsWebAPIUtils = require('../utils/api/AnalyticsAPIUtils');

var ActionTypes = AnalyticsConstants.ActionTypes;

module.exports = {

  listReports: function() {
    AnalyticsAppDispatcher.dispatch({
      type: ActionTypes.LIST_REPORTS_REQUEST,
    });
    // Here, we call the create session API util
    AnalyticsWebAPIUtils.listReports() ;
  }
};


