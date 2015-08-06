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

var ReportStore = require( '../../../stores/ReportStore');
var RequestActionCreators = require('../../../actions/RequestActionCreators');


var ReportListWrapper = React.createClass({
  render: function() {
    return <li> <Link to='reports' params={{report_slug: this.props.data.slug}}>  {this.props.data.title} </Link> </li>;
  }
});

var Page = React.createClass({

  getInitialState: function() {
    return this.getStateFromStores();
  },
  getStateFromStores: function() {
    return {
      reports: ReportStore.getReportList() 
    };
  },
  _onChange: function() {
    this.setState( this.getStateFromStores() );
  },
  componentDidMount: function() {
    this.changeListener = this._onChange;
    ReportStore.addChangeListener(this.changeListener);
    
    RequestActionCreators.listReports( )  ;
  },

  render: function() {
    return (
      <div className="missing-page">
        <h1> Home  </h1>
        <h1>Dashboards</h1>
          <ul>
            {this.state.reports.map(function(report) {
               return <ReportListWrapper key={report.id} data={report}/>;
            })}
          </ul>
      </div>

    );
  }
});

module.exports = Page;
