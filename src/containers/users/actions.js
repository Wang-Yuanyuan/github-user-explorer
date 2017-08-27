import { LOAD_USER } from '../../constant'
import { getUsers } from '../../services/userServices'

export const searchUsers = (term) => {
  return (dispatch) => {
    getUsers(term)
      .then(users => dispatch(loadUser(users)))
  }
}


export const loadUser = users => ({ type: LOAD_USER, payload: users })
