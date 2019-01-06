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

const Footer = () => (
  <footer className="footer">
    <p><a href="https://github.com/michael-simons/simons.ac">Source</a> | <a href="http://blog.simons.ac">Blog</a> | <a href="http://mail.simons.ac">Mail</a> | <a href="http://cal.simons.ac">Kalendar</a></p>
    <p>&copy; 2009-{new Date().getFullYear()} <a href="http://michael-simons.eu">Michael Simons</a><br /> </p>
  </footer>
)

export default Footer
