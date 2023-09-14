/* eslint-disable indent */
import Types from './types'

const defaultState = {
  defaultAccount: null
}

const reducers = (state = defaultState, action) => {
  switch (action.type) {
    case Types.SET_DEFAULT_ACCOUNT:
      return { ...state, defaultAccount: action.payload }
    default:
      return state
  }
}

export default reducers
