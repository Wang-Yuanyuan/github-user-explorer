import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import user from './user'
import repo from './repo'

export default combineReducers({
  router: routerReducer,
  user,
  repo
})
