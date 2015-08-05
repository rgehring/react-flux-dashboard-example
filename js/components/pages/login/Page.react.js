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
      <div className="login-page">a
        <div className="login-box">
          <form className="login-form-container" role="form" onSubmit={this.handleSubmit}   >
            <div className="login-form" >
              <input type="text"  placeholder="Username" ref="user"/>
              <input type="password" placeholder="Password" ref="password" />
              <input type="submit" value="Log In!" ></input>
            </div>
          </form>
          <div className="logo-box">
            <h2 className="whiteText"> Red Bull  </h2>
            <h2 className="redText"> Analytics  </h2>
          </div>
        </div>
      </div>
    );
  }
});
module.exports= Page; 
