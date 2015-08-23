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

var Users = require('./seed/Users');
var Teams = require('./seed/Teams');
var Sessions = require('./seed/Sessions');
var Reports = require('./seed/Reports');
var Charts = require('./seed/Charts');

module.exports = {
  init: function() {
    localStorage.clear();
    localStorage.setItem("listChartsSuccess", JSON.stringify(Charts.LIST_CHARTS_SUCCESS  ));
    localStorage.setItem("listTeamsSuccess", JSON.stringify(Teams.LIST_TEAMS_SUCCESS ));
    localStorage.setItem("listUsersSuccess", JSON.stringify(Users.LIST_USERS_SUCCESS ));
    localStorage.setItem("createSessionSuccess", JSON.stringify(Sessions.CREATE_SESSION_SUCCESS ));
  }
};
