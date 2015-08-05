// This file bootstraps the entire application.

// React and the Router
var React = require('react');
var Router = require('react-router');

var Route = Router.Route ;
var DefaultRoute = Router.DefaultRoute ;
var NotFoundRoute = Router.NotFoundRoute ;
var RouteHandler = Router.RouteHandler ;
var Link = Router.Link ;

// pages
var AnalyticsApp = require('./components/AnalyticsApp.react');
var Home = require("./components/pages/home/Page.react") ;
var Login = require("./components/pages/login/Page.react") ;
var Report = require("./components/pages/report/Page.react") ;
var Team = require("./components/pages/team/Page.react") ;
var MissingPage = require("./components/pages/404/Page.react") ;
var ErrorPage = require("./components/pages/500/Page.react") ;
// Utils
var SeedMockAPI = require('./SeedMockAPI');

// declare routes
var routes = (
  <Route handler={AnalyticsApp} name="app" path="/">

    <DefaultRoute handler={Home}/>
    <NotFoundRoute handler={MissingPage}/>
    
    <Route handler={Home}>
      <Route name="home" handler={Home}/>
    </Route>

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

