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
    var response = JSON.parse(localStorage.getItem('reports'));
    AnalyticsServerActionCreators.listReports(response);
  },
  listSession: function(message, threadName) {
    var response = JSON.parse(localStorage.getItem('session'));
    if response {
      AnalyticsServerActionCreators.listSession(response);
    } 
  },
  listTeams: function() {
    var response = JSON.parse(localStorage.getItem('reports'));
    AnalyticsServerActionCreators.listTeams(response);
  },
  createSession: function(message, threadName) {
    // simulate successful create action on server
    localStorage.setItem('session', JSON.stringify({
      user: {
        id: 'u_1',
        name: 'cool_guy_1',
        pic_url: 'https://github.com/identicons/1337.png?s=50',
        email: 'cool_guy_1@us.redbullmediahouse.com',
        created_at: Date.now() - 99999
      },
      secure_token: 'some_token_for_auth',
    });
    //simulate api response
    var response = JSON.parse(localStorage.getItem('session'));
    // simulate success callback
    AnalyticsServerActionCreators.createSession(response);
  },
  destroySession: function(message, threadName) {
    // simulate successful delete action on server
    if (localStorage.getItem("username") !== null) {
      localStorage.setItem('session', null); 
    }
    // simulate api response
    var response = JSON.parse(localStorage.getItem('session'));
    // simulate callback
    AnalyticsServerActionCreators.destroySession(response);
  }
};
