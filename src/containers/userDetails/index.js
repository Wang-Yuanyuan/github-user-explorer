import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  fetchUser
} from './actions'


class UserDetails extends Component {

  componentDidMount() {
    this.props.getUser(this.props.match.params.userName)
  }

  render() {
    return (
      <div>
        {this.props.currentUser.login}
        <ul>
          {this.props.repos.map(
            repo => <li key={repo.id}>{repo.name}</li>
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
