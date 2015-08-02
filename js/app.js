/**
 * This file is provided by Facebook for testing and evaluation purposes
 * only. Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

// This file bootstraps the entire application.

var AnalyticsApp = require('./components/AnalyticsApp.react');

var SeedMockAPI = require('./SeedMockAPI');
var AnalyticsAPIUtils = require('./utils/api/AnalyticsAPIUtils');
// React and the Router
var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;
var routes = require('./routes')
// pages
var Home = require("./components/pages/home") ;
var Login = require("./components/pages/login") ;
var Report = require("./components/pages/report") ;
var Team = require("./components/pages/team") ;
var 404Page = require("./components/pages/404") ;
var 500Page = require("./components/pages/500") ;

// declare app
var App = React.createClass({
  render: function () {
    return (
      <div class="analytics-app">
        <RouteHandler/>
      </div>
    );
  }
});



// declare routes
var routes = (
  <Route handler={App} name="app" path="/">

    <Route handler={Login} name="login" >
      <Route name="login" handler={Login}/>
    </Route>

    <DefaultRoute handler={Home}/>
    <NotFoundRoute handler={404Page}/>

    <Route handler={Team}>
      <Route name="teams" handler={Team}/>
    </Route>
    
    <Route handler={Report}>
      <Route name="reports" path="/reports/:report_slug" handler={Report}/>
    </Route>
  
  </Route>
);


window.React = React; // export for http://fb.me/react-devtools

SeedMockAPI.init(); // load example data into localstorage

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('react'));
});

