import {
  LOAD_REPOS,
  LOADING_REPOS
} from '../constant';

const initialState = {
  repos: [],
  isLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_REPOS:
      return {
        ...state,
        repos: action.payload
      }
    case LOADING_REPOS:
      return {
        ...state,
        isLoading: action.payload
      }
    default:
      return state
  }
}
