var AnalyticsAppDispatcher = require('../dispatcher/AnalyticsAppDispatcher');
var AnalyticsConstants = require('../constants/AnalyticsConstants');
var AnalyticsWebAPIUtils = require('../utils/api/AnalyticsAPIUtils');

var ActionTypes = AnalyticsConstants.ActionTypes;

module.exports = {

  attemptLogin: function(user, password) {
    AnalyticsAppDispatcher.dispatch({
      type: ActionTypes.LOGIN_ATTEMPT,
    });
    console.log('login attempt!') ;   
    // Here, we call the create session API util
    AnalyticsWebAPIUtils.createSession(user, password) ;
  }
};

