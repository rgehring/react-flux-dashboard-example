
var React = require('react');
var Router = require('react-router');
var Route = Router.Route ;
var RouteHandler = Router.RouteHandler ;
var Link = Router.Link ;

var Login = require("./pages/login/Page.react") ;
var SessionStore = require( '../stores/SessionStore');

var AnalyticsApp = React.createClass({
 
  getInitialState: function() {
    return this.getStateFromStores();
  },

  getStateFromStores: function() {
    return {
      userLoggedIn: SessionStore.isLoggedIn(),
      user: SessionStore.getUser(),
      jwt: SessionStore.getJwt()
    };
  },

  _onChange: function() {
    this.setState( this.getStateFromStores() );
  },

  componentDidMount: function() {
    this.changeListener = this._onChange;
    SessionStore.addChangeListener(this.changeListener);
  },
  componentWillUnmount: function() {
    SessionStore.removeChangeListener(this.changeListener);
  },

  render: function() {
    if ( this.state.userLoggedIn ) {
      return (
        <RouteHandler/>
      );
    } else {
      return (
        <div className="analytics-app">
          <Login />
        </div>
      );
    }
  }
});

module.exports = AnalyticsApp;
