import { noop } from 'lodash'
import Types from './types'

const actions = (dispatch = noop) => {
  return {
    setDefaultAccount: (account) => {
      dispatch({ type: Types.SET_DEFAULT_ACCOUNT, payload: account })
    }
  }
}

export default actions
