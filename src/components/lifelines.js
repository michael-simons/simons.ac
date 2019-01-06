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

// Renders a single year
function Year(props) {
  const year   = props.year
  const values = props.values
  const numberOfSpans = 4 - values.size
  return (
      <tr>
        <th>{year}</th>
        <td><img className="img-responsive img-rounded" alt={"Michael in " + year} src={values.get('m').publicURL} /></td>
        <td><img className="img-responsive img-rounded" alt={"Tina in " + year}    src={values.get('t').publicURL} /></td>
        {values.has('a') && <td><img className="img-responsive img-rounded" alt={"Anton in " + year} src={values.get('a').publicURL} /></td>}
        {values.has('o') && <td><img className="img-responsive img-rounded" alt={"Oskar in " + year} src={values.get('o').publicURL} /></td>}
        {numberOfSpans > 0 && <td colSpan={numberOfSpans}>&#160;</td>}
      </tr>
  )
}

const Lifelines = ({data}) => (
  <div className="row main-content lifelines">
    <div className="col-md-12">
    <table className="table table-condensed" style={{tableLayout: 'fixed'}}>
      <colgroup>
        <col style={{width:'12%'}} />
        <col style={{width:'22%'}} />
        <col style={{width:'22%'}} />
        <col style={{width:'22%'}} />
        <col style={{width:'22%'}} />
      </colgroup>
    
      <thead>
        <tr>
          <th>&#160;</th>
          <th>Michael</th>
          <th>Tina</th>
          <th>Anton</th>
          <th>Oskar</th>
      </tr>
      </thead>
      <tfoot />
      <tbody>
        {data.map((entry, index) => <Year key={index} year={entry[0]} values={entry[1]} />)}
      </tbody>
    </table>
  </div>
  </div>
)

export default Lifelines
