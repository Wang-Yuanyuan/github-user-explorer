import { USER_NAME_ON_CHANGE } from '../../constant'

export const userNameOnChange = (name) => {
  return dispatch => {
    dispatch({
      type: USER_NAME_ON_CHANGE,
      payload: name
    })
  }
}
