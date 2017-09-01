import { LOAD_USERS, LOADING_USERS } from '../../constant'
import { getUsers } from '../../services/userServices'

export const searchUsers = (term) => {
  return (dispatch) => {
    dispatch({ type: LOADING_USERS, payload: true })
    getUsers(term)
      .then(users => {
        dispatch(loadUsers(users))
        dispatch({ type: LOADING_USERS, payload: false })
      })
  }
}


export const loadUsers = users => ({ type: LOAD_USERS, payload: users })
export const loadingUsers = users => ({ type: LOAD_USERS, payload: users })
