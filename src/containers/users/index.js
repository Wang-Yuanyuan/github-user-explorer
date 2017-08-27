import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  searchUsers
} from './actions'


class Users extends Component {

  componentDidMount() {
    this.props.searchUser(this.props.match.params.term)
  }

  render() {
    return (
      <div>
        <div>
          <h1>
            User List
          </h1>
        </div>
        <div>
          <ul>
            {
              this.props.users.map(user => <li
                onClick={() => this.props.goToSearchResults(user.login)}
                key={user.id}>{user.login}</li>)
            }
          </ul>
        </div>
      </div>
    )
  }
}
const mapStateToProps =  state => ({
  users: state.user.users
})

const mapDispatchToProps = dispatch => bindActionCreators({
  searchUser: (name) => searchUsers(name),
  goToSearchResults: (userName) => push(`/user/${userName}`)
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)
