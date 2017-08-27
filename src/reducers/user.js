import { USER_NAME_ON_CHANGE, LOAD_USER } from '../constant';

const initialState = {
  name: '',
  users: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_NAME_ON_CHANGE:
      return {
        ...state,
        name: action.payload
      }
    case LOAD_USER:
      return{
        ...state,
        users: action.payload.items
      }
    default:
      return state
  }
}
