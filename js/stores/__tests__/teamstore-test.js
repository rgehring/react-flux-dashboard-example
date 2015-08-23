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

jest.dontMock('../TeamStore');
jest.dontMock('../../utils/seed/Teams');
jest.dontMock('object-assign');

describe('TeamStore', function() {

  var AnalyticsConstants = require('../../constants/AnalyticsConstants');
  var callback;
  var ListChartsSuccess ;
  var AnalyticsAppDispatcher;
  var ChartStore;
  var  TeamStubs = require('../../utils/seed/Teams');
  var ListTeamsActionStub = {
    type: AnalyticsConstants.ActionTypes.LIST_TEAMS,
    data: TeamStubs.LIST_TEAMS_SUCCESS
  };
  
  beforeEach(function() {
    AnalyticsAppDispatcher = require('../../dispatcher/AnalyticsAppDispatcher');
    TeamStore = require('../TeamStore');
    callback = AnalyticsAppDispatcher.register.mock.calls[0][0];
  });

  it('registers a callback with the dispatcher', function() {
    expect(AnalyticsAppDispatcher.register.mock.calls.length).toBe(1);
  });

  it('initializes with no teams', function() {
    var all = TeamStore.getTeamList();
     expect(all).toEqual( [] ); 
  });

  it('creates team data from list action', function() {
    callback( ListTeamsActionStub );
    var teamList = TeamStore.getTeamList() ;
    expect(teamList.length ).toEqual( 2 ) ;
  });

});

