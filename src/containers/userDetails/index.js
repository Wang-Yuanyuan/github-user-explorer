import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  fetchUser
} from './actions'

import './style.css'

import RepoListElement from '../../components/repoListElement'
import NoResultFound from '../../components/emptyResult'
import Loader from '../../components/loader'


class UserDetails extends Component {

  componentDidMount() {
    this.props.getUser(this.props.match.params.userName)
  }

  render() {
    const { avatar_url, login, location } = this.props.currentUser
    const { repos, isLoading } = this.props
    console.log(isLoading);
    return (
      <div className="userDetailsContainer">
        <div hidden={isLoading} className={!isLoading && "userProfile"}>
          <img src={avatar_url} />
          <div className="userDetailsInfo">
            <h3>{login}</h3>
            <h4>{location}</h4>
          </div>
        </div>
        <h4>Popular repositories</h4>
        <Loader hidden={!isLoading} />
        <NoResultFound hidden={isLoading || repos.length > 0} />
        <ul className={!isLoading && "repoList"} hidden={isLoading}>
          {repos.map(
            repo => <RepoListElement key={repo.id} repo={repo} />
          )}
        </ul>
      </div>
    )
  }
}
const mapStateToProps =  state => ({
  currentUser: state.user.currentUser,
  repos: state.repo.repos,
  isLoading: state.repo.isLoading
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getUser: (name) => fetchUser(name)
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetails)
