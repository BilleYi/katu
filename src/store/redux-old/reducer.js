import { CHANGE_LOGIN_VALUE } from "./actionTypes"

const defaultState = {
  isLogin: false,
}

const reducer = (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case CHANGE_LOGIN_VALUE:
      newState.isLogin = !newState.isLogin
      return newState
    default:
      return state
  }
}

export default reducer
