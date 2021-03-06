import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import NoResultFound from '../../components/emptyResult'
import Loader from '../../components/loader'

import {
  searchUsers
} from './actions'

import UserList from '../../components/userList'

import './style.css'


class Users extends Component {

  componentDidMount() {
    this.props.searchUser(this.props.match.params.term)
  }

  render() {
    const { isLoading, users } = this.props
    return (
      <div className="usersContainer">
        <div>
          <h1>
            User List
          </h1>
        </div>
        <div>
          <Loader hidden={!isLoading} />
          <ul hidden={isLoading} className="userList">
            {
              this.props.users.map(user => <UserList
                onClick={() => this.props.goToSearchResults(user.login)}
                name={user.login}
                avatar={user.avatar_url}
                score={user.score}
                key={user.id}>
                {user.login}
              </UserList>)
            }
          </ul>
        </div>
        <NoResultFound hidden={isLoading || users.length > 0} />
      </div>
    )
  }
}
const mapStateToProps =  state => ({
  users: state.user.users,
  isLoading: state.user.isLoading
})

const mapDispatchToProps = dispatch => bindActionCreators({
  searchUser: (name) => searchUsers(name),
  goToSearchResults: (userName) => push(`/user/${userName}`)
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)
