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
import Lifelines from '../components/lifelines'

// Query for all lifeline images
export const query = graphql`query {
  allFile(
    filter: {
      sourceInstanceName: {eq: "images"}
      relativePath: {regex: "/lifelines\/.*/"}
    }
    sort: {fields: name, order: ASC}
  ) {
    edges {
      node {
        name
        relativePath
        publicURL
      }
    }
  }
}`

// Groups the images by year. Each year will contain a map containg
// the nodes for m, t, a and o.
function groupByYear(result, row) {
  const node = row['node']
  const year = node.name.substr(0,4)
  const key = node.name.substr(5)
  if(!result.has(year)) {
    const entry = new Map()
    result.set(year, entry)
  }
  result.get(year).set(key, node)
  return result
}

export default ({data}) => {
  const lifelines = Array.from(data.allFile.edges.reduce(groupByYear, new Map()).entries())
  return (
    <Layout>
      <Meta title="Lifelines" />
      <div className="jumbotron">
        <h1>Lifelines</h1>
        <p className="lead">`
          Back in October 2000, 2 lifelines crossed in Jülich.
          Starting as an improbable relationship we've ended up as 4 people.
          2009 our first son Anton was born, shortly thereafter we bought a house and in 2013, our second son Oskar came into this world.
          Much has changed ever since, but we still love, laugh and fight with and each other.
        `</p>
      </div>

      <Lifelines data={lifelines} />
    </Layout>
  )
}