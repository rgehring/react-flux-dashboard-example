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

var Login = require("./components/pages/login") ;
var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;

var AnalyticsApp = React.createClass({
  getInitialState: function() {
    return {
      isLoggedIn: false;
    }                 
  },
  render: function() {
    if ( this.state.isLoggedIn ) {
      return (
        <div className="analytics-app">
          <RouteHandler/>
        </div>
      );
    } else {
      return (
        <div className="analytics-app">
        </div>
      );
    }
  }
});

module.exports = AnalyticsApp;
