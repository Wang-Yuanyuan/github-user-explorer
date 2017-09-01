import {
  LOAD_USER,
  LOAD_REPOS,
  LOADING_REPOS
} from '../../constant'
import {
  getUser,
  fetchRepos
} from '../../services/userServices'

export const fetchUser = (userName) => {
  return (dispatch) => {
    dispatch({ type: LOADING_REPOS, payload: true })
    getUser(userName)
      .then(user => {
        fetchRepos(user.repos_url).then(repos => {
          dispatch(loadRepors(repos))
          dispatch({ type: LOADING_REPOS, payload: false })
        })
        dispatch(loadUser(user))
      })
  }
}


export const loadUser = user => ({ type: LOAD_USER, payload: user })
export const loadRepors = repos => ({ type: LOAD_REPOS, payload: repos });
