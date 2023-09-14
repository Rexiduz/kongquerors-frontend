import { useDispatch, useSelector } from 'react-redux'

import actions from 'core/stores/actions'

const useStore = (selectorFn = (state) => state) => {
  const state = useSelector((state) => selectorFn(state))
  const dispatch = useDispatch()

  //   const actions = React.useMemo(() => {
  //     return Actions(dispatch)
  //   }, [dispatch])

  return [state, actions(dispatch)]
}

export default useStore
