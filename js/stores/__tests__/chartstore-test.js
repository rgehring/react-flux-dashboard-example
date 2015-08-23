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

jest.dontMock('../ChartStore');
jest.dontMock('../../utils/seed/Charts');
jest.dontMock('object-assign');

describe('ChartStore', function() {

  var AnalyticsConstants = require('../../constants/AnalyticsConstants');
  var callback;
  var ListChartsSuccess ;
  var AnalyticsAppDispatcher;
  var ChartStore;
  var  ChartStubs = require('../../utils/seed/Charts');
  var ListChartsActionStub = {
    type: AnalyticsConstants.ActionTypes.LIST_CHARTS,
    data: ChartStubs.LIST_CHARTS_SUCCESS
  };
  
  beforeEach(function() {
    AnalyticsAppDispatcher = require('../../dispatcher/AnalyticsAppDispatcher');
    ChartStore = require('../ChartStore');
    callback = AnalyticsAppDispatcher.register.mock.calls[0][0];
  });

  it('registers a callback with the dispatcher', function() {
    expect(AnalyticsAppDispatcher.register.mock.calls.length).toBe(1);
  });

  it('initializes with no charts', function() {
    var all = ChartStore.getChartList();
     expect(all).toEqual( [] ); 
  });

  it('creates chart data from list action', function() {
    callback( ListChartsActionStub );
    var chartList = ChartStore.getChartList() ;
    expect(chartList.length ).toEqual( 6 ) ;
  });

});

