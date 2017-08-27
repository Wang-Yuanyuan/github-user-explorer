import {
  LOAD_USER,
  LOAD_REPOS
} from '../../constant'
import {
  getUser,
  fetchRepos
} from '../../services/userServices'

export const fetchUser = (userName) => {
  return (dispatch) => {
    getUser(userName)
      .then(user => {
        fetchRepos(user.repos_url).then(repos => dispatch(loadRepors(repos)))
        dispatch(loadUser(user))
      })
  }
}


export const loadUser = user => ({ type: LOAD_USER, payload: user })
export const loadRepors = repos => ({ type: LOAD_REPOS, payload: repos });
