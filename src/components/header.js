/* 
 * Copyright 2009-2019 Michael J. Simons.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React from 'react'
import { Location, Link } from '@reach/router'
import PropTypes from 'prop-types'

const Header = ({ siteTitle }) => (
  <div className="header">
    <nav>
      <Location>
        {({ location }) => (      
          <ul className="nav nav-pills pull-right">
            <li role="presentation" className={location.pathname.startsWith("/lifelines") ? "active" : ""}><Link to="/lifelines">Lifelines</Link></li>
            <li role="presentation" className={location.pathname==="/" ? "active" : ""}><Link to="/">Home</Link></li>
          </ul>
        )}
      </Location>
    </nav>
    <h3 className="text-muted">{ siteTitle }</h3>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Familie Simons`,
}

export default Header
