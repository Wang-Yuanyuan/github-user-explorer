import React from 'react'
import './style.css'

const RepoListElement = props => (
  <li className="repoListElement">
    <div className="repoName">{props.repo.name}</div>
    <div className="repoInfo">
      <div><i className="fa fa-star" aria-hidden="true" />{props.repo.stargazers_count}</div>
      <div><i className="fa fa-code-fork" aria-hidden="true" />{props.repo.forks_count}</div>
    </div>
  </li>
)


export default RepoListElement
