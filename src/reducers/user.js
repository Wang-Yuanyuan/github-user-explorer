import {
  USER_NAME_ON_CHANGE,
  LOAD_USERS,
  LOAD_USER
} from '../constant';

const initialState = {
  name: '',
  users: [],
  currentUser: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_NAME_ON_CHANGE:
      return {
        ...state,
        name: action.payload
      }
    case LOAD_USERS:
      return{
        ...state,
        users: action.payload.items
      }
    case LOAD_USER:
      return{
        ...state,
        currentUser: action.payload
      }
    default:
      return state
  }
}
