import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  fetchUser
} from './actions'

import './style.css'

import RepoListElement from '../../components/repoListElement'


class UserDetails extends Component {

  componentDidMount() {
    this.props.getUser(this.props.match.params.userName)
  }

  render() {
    const { avatar_url, login, location } = this.props.currentUser
    return (
      <div className="userDetailsContainer">
        <div className="userProfile">
          <img src={avatar_url} />
          <div className="userDetailsInfo">
            <h3>{login}</h3>
            <h4>{location}</h4>
          </div>
        </div>
        <h4>Popular repositories</h4>
        <ul className="repoList">
          {this.props.repos.map(
            repo => <RepoListElement key={repo.id} repo={repo} />
          )}
        </ul>
      </div>
    )
  }
}
const mapStateToProps =  state => ({
  currentUser: state.user.currentUser,
  repos: state.repo.repos
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getUser: (name) => fetchUser(name)
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetails)
