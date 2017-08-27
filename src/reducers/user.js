import { USER_NAME_ON_CHANGE } from '../constant';

const initialState = {
  name: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_NAME_ON_CHANGE:
      return {
        ...state,
        name: action.payload
      }
    default:
      return state
  }
}
