import React from 'react'
import './style.css'


const Loader = props => (
  <div {...props} className="loader">
    <span>{"{"}</span><span>{"}"}</span>
  </div>
)


export default Loader
