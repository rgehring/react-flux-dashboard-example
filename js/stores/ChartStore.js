/**
 *  * This file is provided by Facebook for testing and evaluation purposes
 *   * only. Facebook reserves all rights not expressly granted.
 *    *
 *     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *      * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 *        * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 *         * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 *          * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *           
 */




// ... imports
var AnalyticsAppDispatcher = require('../dispatcher/AnalyticsAppDispatcher');
var AnalyticsConstants = require('../constants/AnalyticsConstants');
var ActionTypes = AnalyticsConstants.ActionTypes;
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var CHANGE_EVENT = 'change';


var ChartStore = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  // Just getters for the properties it got from the action.
  getChartList: function() {
    return this._chartList;
  },
  getChart: function(chartId) {
    var self = this ;
      for (var i = 0; i < self._chartList.length; i++) {
        if (self._chartList[i].id === chartId) {
          var out = self._chartList[i];
          return out ;
        }
      }   
    return null;
  }
});
// set initial state
ChartStore._chartList = [];
ChartStore._activeChart = null;

// register to the Dispatcher to listen for actions.
ChartStore.dispatchToken = AnalyticsAppDispatcher.register(
  function(action) {
    switch(action.type) {
      case ActionTypes.LIST_CHARTS:
        ChartStore._chartList = action.data.charts;
        ChartStore.emitChange();
        break;
      default:
        break;
    };
  } 
);


module.exports = ChartStore ;



