import {
  LOAD_REPOS
} from '../constant';

const initialState = {
  repos: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_REPOS:
      return{
        ...state,
        repos: action.payload
      }
    default:
      return state
  }
}
