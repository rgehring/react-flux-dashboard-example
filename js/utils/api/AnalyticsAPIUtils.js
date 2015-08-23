/** All API functions for routes go here.
 * Each API Function contains the API Call and the Callback Invocation for the Appropriate API Call Action.
 * Naming conventions will follow CRUD Route Nomenclature IE:
 *  - ShowItems
 *  - ListItems
 *  - CreateItems
 *  - DestroyItems
 */


var AnalyticsServerActionCreators = require('../../actions/AnalyticsServerActionCreators');

module.exports = {

  listCharts: function(team_slug, report_slug, page) {
    // simulate retrieving data from an API
    var response = JSON.parse(localStorage.getItem('listChartsSuccess'));
    // simulate success callback
    AnalyticsServerActionCreators.listCharts(response);
  },
  listSession: function(message, threadName) {
    var response = JSON.parse(localStorage.getItem('session'));
    if (response) {
      AnalyticsServerActionCreators.listSession(response);
    } 
  },
  listTeams: function() {
    var response = JSON.parse(localStorage.getItem('listTeamsSuccess'));
    AnalyticsServerActionCreators.listTeams(response);
  },
  createSession: function(user, password) {
    localStorage.setItem('session',  (localStorage.getItem('createSessionSuccess')));
    var response = JSON.parse(localStorage.getItem('session'));
    AnalyticsServerActionCreators.createSessionSuccess(response);
  },
  destroySession: function(message, threadName) {
    if (localStorage.getItem("session") !== null) {
      localStorage.setItem('session', null); 
    }
    var response = JSON.parse(localStorage.getItem('session'));
    AnalyticsServerActionCreators.destroySession(response);
  }
};
