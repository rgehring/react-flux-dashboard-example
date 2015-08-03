// ... imports
var React = require('react');
var API = require('../../../utils/api/AnalyticsAPIUtils');
var LoginActionCreators = require('../../../actions/LoginActionCreators');

var Page = React.createClass( {

  // This will be called when the user clicks on the login button
  handleSubmit(e)  {
    e.preventDefault();
    console.log('submit pressed');
    var user = React.findDOMNode(this.refs.user).value;
    var pw = React.findDOMNode(this.refs.password).value;
    // create a login action
    LoginActionCreators.attemptLogin( user, pw )  ;
  },

  render() {
    return (
      <div className="login-form">
        <h3> Login  </h3>
        <form role="form" onSubmit={this.handleSubmit}   >
          <div className="form-group" >
            <input type="text"  placeholder="Username" ref="user"/>
            <input type="password" placeholder="Password" ref="password" />
          </div>
          <button type="submit" >Submit</button>
        </form>
      </div>
    );
  }
});
module.exports= Page; 
