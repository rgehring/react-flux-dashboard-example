// This file bootstraps the entire application.

// React and the Router
var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;
var routes = require('./routes')
// pages
var AnalyticsApp = require('./components/AnalyticsApp.react');
var Home = require("./components/pages/home") ;
var Login = require("./components/pages/login") ;
var Report = require("./components/pages/report") ;
var Team = require("./components/pages/team") ;
var 404Page = require("./components/pages/404") ;
var 500Page = require("./components/pages/500") ;
// Utils
var SeedMockAPI = require('./SeedMockAPI');

// declare routes
var routes = (
  <Route handler={AnalyticsApp} name="app" path="/">

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

SeedMockAPI.init(); // load example api data into localstorage

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('react'));
});

