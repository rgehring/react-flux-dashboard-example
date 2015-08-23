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
jest.dontMock('object-assign');

describe('UnreadThreadStore', function() {

  var ChatAppDispatcher;
  var UnreadThreadStore;
  var callback;

  beforeEach(function() {
    ChatAppDispatcher = require('../../dispatcher/AnalyticsAppDispatcher');
    UnreadThreadStore = require('../ChartStore');
    callback = ChatAppDispatcher.register.mock.calls[0][0];
  });

  it('registers a callback with the dispatcher', function() {
    expect(ChatAppDispatcher.register.mock.calls.length).toBe(1);
  });


});
