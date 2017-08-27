import { LOAD_USERS } from '../../constant'
import { getUsers } from '../../services/userServices'

export const searchUsers = (term) => {
  return (dispatch) => {
    getUsers(term)
      .then(users => dispatch(loadUsers(users)))
  }
}


export const loadUsers = users => ({ type: LOAD_USERS, payload: users })
