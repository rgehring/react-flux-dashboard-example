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
var ChartStore = require( '../../../stores/ChartStore');
var RequestActionCreators = require('../../../actions/ClientRequestActionCreators');

var Chart = require('./Chart.react');

var Loader = React.createClass({ 
  render: function() {
    return ( 
      <div  className="loader">Loading...</div>
    ) ;
  }
});

var ChartListWrapper = React.createClass({ 

  componentDidMount: function() {
    this.setState({loading: false});  
  },

  getInitialState: function() {
    return {
      loading: true
    };
  }  ,

  render: function() {
    var self = this; 
    var bootStrapGridClass="li-chart col-md-".concat(this.props.data.bootstrap_grid_width) ;
    var chartToShow ;    
    if (self.state.loading) {
      chartToShow = ( <Loader /> ) ;
    } else {
      chartToShow =( <Chart key={this.props.data.id} data={this.props.data} /> ) ;
    }

    return ( 
      <li className={bootStrapGridClass } > 
        {chartToShow}
      </li>
    ) ; 
  }

});

var ChartPaginator = React.createClass({
  
  sendNextPageRequest: function() {
    console.log("here i create the action for another page request"); 
  },
  
  render: function() {
    var self = this;
    return  ( <button className="chart-paginator" onClick={self.sendNextPageRequest }>...</button>  )       
  }
});

var Page = React.createClass({
  mixins: [ Router.State ],
  
  getInitialState: function() {
    return this.getStateFromStores();
  },

  getStateFromStores: function() {
    return {
      user: SessionStore.getUser(),
      charts: ChartStore.getChartList() 
    };
  },

  _onChange: function() {
    this.setState( this.getStateFromStores() );
  },

  componentDidMount: function() {
    this.changeListener = this._onChange;
    ChartStore.addChangeListener(this.changeListener);
    var teamSlug = this.getParams().team_slug ; 
    var reportSlug = this.getParams().report_slug ; 
    RequestActionCreators.listCharts( teamSlug, reportSlug, 1 )  ;
  },

  render: function() {
    return (
      <div className="report-page">
        <h1> Report Title  </h1>
        <ul className="chart-list">
          { this.state.charts.map(function(chart) {
             return <ChartListWrapper key={chart.id} data={chart}/>;
          })}
        </ul>

        <ChartPaginator />
      </div>
    );
  }
});

module.exports = Page;
