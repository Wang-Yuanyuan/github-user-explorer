import React from 'react'
import './style.css'

import githubIcon from '../../img/github-icon.png'

const notFoundPage = props => (
  <div>
    <div className="githubIcon">
      <div><img src={githubIcon} /></div>
      <h2>Error 404</h2>
      <div>We can't find the page which you are looking for.</div>
    </div>
  </div>
)


export default notFoundPage
