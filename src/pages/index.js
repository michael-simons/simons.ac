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
import React from "react"
import { graphql } from "gatsby"

import Meta from '../components/meta'
import Layout from '../components/layout'
import Member from '../components/member'

// Query the most recent static images of the kids
export const query = graphql`query {
  anton: allFile(
    filter: {
      sourceInstanceName: {eq: "images"},
      relativePath: {regex: "/portraits/anton/.*/"}},
    sort: {fields: name, order: DESC}
    limit:1
  ) {
    edges {
      node {
        publicURL
      }
    }
  }
  oskar: allFile(
    filter: {
      sourceInstanceName: {eq: "images"},
      relativePath: {regex: "/portraits/oskar/.*/"}},
    sort: {fields: name, order: DESC}
    limit:1
  ) {
    edges {
      node {
        publicURL
      }
    }
  }
}`

export default ({data}) => (
  <Layout>
    <Meta title="Home" keywords={[`Familie Simons`, `Simons`, `Michael`, `Tina`, `Aachen`, `Java Champion Aachen`]} />
    <div className="row main-content">
      <Member name="Tina" userOnDailyFratze="tina">
        <p>Jahrgang 1981, ist von Kreuzau über Jülich nach Aachen gezogen.</p>
        <p>Täglich neue Fotos gibt es neben gelegentlichem Bloggen auf <a href="http://dailyfratze.de/tina">Tinas täglicher Fratze</a>.</p>
        <p>Tina ist unter <a href="mailto:tina@simons.ac">tina@simons.ac</a> erreichbar.</p>
      </Member>

      <Member name="Michael" userOnDailyFratze="michael">
        <p>Jahrgang 1979, ist von Heinsberg über Jülich nach Aachen gekommen und wohnt seit 2003 in der Kaiserstadt.</p>
        <p>Wenn er nicht gerade <a href="http://biking.michael-simons.eu">Fahrrad fährt</a>, arbeitet er oft an <a href="http://dailyfratze.de">dailyfratze.de</a> oder an einem seiner zahlreichen anderen <a href="http://michael-simons.eu">Projekte</a>.</p>
        <p>Michael ist unter <a href="mailto:michael@simons.ac">michael@simons.ac</a> erreichbar.</p>
      </Member>

      <Member name="Anton">
        <div className="portrait">
          <img className="img-responsive img-thumbnail" alt="Anton" src={data.anton.edges[0].node.publicURL} />
        </div>
        <p>Jahrgang 2009, geboren im <a href="http://www.luisenhospital.de/">Luisenhospital</a> in Aachen.</p>
        <p>Anton liest noch keine Emails…</p>
      </Member>

      <Member name="Oskar">
        <div className="portrait">
          <img className="img-responsive img-thumbnail" alt="Oskar" src={data.oskar.edges[0].node.publicURL} />
        </div>
        <p>Jahrgang 2013, ebenfalls im Luisenhospital Aachen geboren.</p>
        <p>Oskar liest noch keine Emails…</p>
      </Member>

      <div className="col-xs-12">
        <p>Wir bloggen in unregelmässigen Abständen in unserem Familienblog: <a href="http://blog.simons.ac">blog.simons.ac</a>.</p>
      </div>
    </div>
  </Layout>
)