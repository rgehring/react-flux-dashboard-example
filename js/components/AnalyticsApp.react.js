
var React = require('react');
var Router = require('react-router');
var Route = Router.Route ;
var RouteHandler = Router.RouteHandler ;
var Link = Router.Link ;

var Login = require("./pages/login/Page.react") ;
var LoginStore = require( '../stores/LoginStore');

var AnalyticsApp = React.createClass({
 
  getInitialState: function() {
    return this.getStateFromStores();
  },

  getStateFromStores: function() {
    return {
      userLoggedIn: LoginStore.isLoggedIn(),
      user: LoginStore.getUser(),
      jwt: LoginStore.getJwt()
    };
  },

  _onChange: function() {
    this.setState( this.getStateFromStores() );
  },

  componentDidMount: function() {
    this.changeListener = this._onChange;
    LoginStore.addChangeListener(this.changeListener);
  },
  componentWillUnmount: function() {
    LoginStore.removeChangeListener(this.changeListener);
  },

  render: function() {
    if ( this.state.userLoggedIn ) {
      return (
        <div className="analytics-app">
          <h1> You logged in! </h1>
        </div>
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
