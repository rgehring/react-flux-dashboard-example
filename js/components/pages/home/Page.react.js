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

var React = require('react');
var Router = require('react-router');
var Link = Router.Link ;

var SessionStore = require( '../../../stores/SessionStore');
var TeamStore = require( '../../../stores/TeamStore');
var RequestActionCreators = require('../../../actions/ClientRequestActionCreators');





var ReportListWrapper = React.createClass({
  render: function() {
    return <li> <Link to='reports' params={{report_slug: this.props.data.slug}}>  {this.props.data.title} </Link> </li>;
  }
});

var TeamListWrapper = React.createClass({ 
  render: function() {
    return <li> 
      <Link to='teams' params={{team_slug: this.props.data.slug}}>  {this.props.data.name}  </Link> 
      <ul className="reportList">
          {this.props.data.report_summary.results.map(function(report) {
             return <ReportListWrapper key={report.id} data={report}/>;
          })}
      </ul>
  
    </li>;
  }
});



var Page = React.createClass({

  getInitialState: function() {
    return this.getStateFromStores();
  },
  getStateFromStores: function() {
    return {
      user: SessionStore.getUser(),
      teams: TeamStore.getTeamList() 
    };
  },
  _onChange: function() {
    this.setState( this.getStateFromStores() );
  },
  componentDidMount: function() {
    this.changeListener = this._onChange;
    TeamStore.addChangeListener(this.changeListener);
    
    RequestActionCreators.listTeams( )  ;
  },

  render: function() {
    return (
      <div className="home-page">
        <h1> Home  </h1>
        <h1>Teams </h1>
          <ul>
            {this.state.teams.map(function(team) {
               return <TeamListWrapper key={team.id} data={team}/>;
            })}
          </ul>
      </div>

    );
  }
});

module.exports = Page;
