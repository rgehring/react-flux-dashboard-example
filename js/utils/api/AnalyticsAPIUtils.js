/** All API functions for routes go here.
 * Each API Function contains the API Call and the Callback Invocation for the Appropriate API Call Action.
 * Naming conventions will follow CRUD Route Nomenclature IE:
 *  - ShowItems
 *  - ListItems
 *  - CreateItems
 *  - DestroyItems
 */


var AnalyticsServerActionCreators = require('../actions/AnalyticsServerActionCreators');

module.exports = {

  listCharts: function(team_slug, report_slug) {
    // simulate retrieving data from an API
    var response = JSON.parse(localStorage.getItem('charts'));
    // simulate success callback
    AnalyticsServerActionCreators.listCharts(response);
  },
  listReports: function(team_slug) {
    // simulate retrieving data from an API
    var response = JSON.parse(localStorage.getItem('reports'));
    // simulate success callback
    AnalyticsServerActionCreators.listReports(response);
  },
  listSession: function(message, threadName) {
    // simulate writing to a database
    var response = JSON.parse(localStorage.getItem('reports'));
    // simulate success callback
    AnalyticsServerActionCreators.listReports(response);
  },
  listTeams: function() {
    // simulate retrieving data from an API
    var response = JSON.parse(localStorage.getItem('reports'));
    // simulate success callback
    AnalyticsServerActionCreators.listTeams(response);
  },
  createSession: function(message, threadName) {
    // simulate writing to a database
    var response = JSON.parse(localStorage.getItem('reports'));
    // simulate success callback
    AnalyticsServerActionCreators.listReports(response);
  },
  destroySession: function(message, threadName) {
    // simulate writing to a database
    var response = JSON.parse(localStorage.getItem('reports'));
    // simulate success callback
    AnalyticsServerActionCreators.listReports(response);
  }
};
