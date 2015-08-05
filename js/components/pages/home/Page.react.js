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


var Page = React.createClass({
  render: function() {
    return (
      <div className="missing-page">
        <h1> Home  </h1>
        <h1>Dashboards</h1>
        <Link  to="reports" params={{ report_slug: "hello" }} > A Report   </Link>
        <h1>CI Badges for Instrumentation Projects</h1>
        <table>
          <tr>
            <td>  <a href="https://www.github.com/circleci/mongofinil"   > Adobe / Web  </a>  </td>
            <td>   <a href="https://circleci.com/gh/circleci/mongofinil"   > <img src="https://circleci.com/gh/circleci/mongofinil.svg?&style=shield"/> </a>    </td>
          </tr>
          <tr>
            <td>  <a href="https://www.github.com/circleci/mongofinil"   > Adobe / iOS  </a>  </td>
            <td>   <a href="https://circleci.com/gh/circleci/mongofinil"   > <img src="https://circleci.com/gh/circleci/mongofinil.svg?&style=shield"/> </a>    </td>
          </tr>
          <tr>
            <td>  <a href="https://www.github.com/circleci/mongofinil"   >  Adobe / Android  </a>  </td>
            <td>   <a href="https://circleci.com/gh/circleci/mongofinil"   > <img src="https://circleci.com/gh/circleci/mongofinil.svg?&style=shield"/> </a>    </td>
          </tr>
          <tr>
            <td>  <a href="https://www.github.com/circleci/mongofinil"   >  Adobe / Apple TV  </a>  </td>
            <td>   <a href="https://circleci.com/gh/circleci/mongofinil"   > <img src="https://circleci.com/gh/circleci/mongofinil.svg?&style=shield"/> </a>    </td>
          </tr>
          <tr>
            <td>  <a href="https://www.github.com/circleci/mongofinil"   >  Adobe / Roku  </a>  </td>
            <td>   <a href="https://circleci.com/gh/circleci/mongofinil"   > <img src="https://circleci.com/gh/circleci/mongofinil.svg?&style=shield"/> </a>    </td>
          </tr>
        </table>
        <a href="https://wiki.jenkins-ci.org/download/attachments/68387008/2_Three_columns_view.png"> Our team can maintain a CI Board like THIS for each integratin above </a>
      </div>

    );
  }
});

module.exports = Page;
