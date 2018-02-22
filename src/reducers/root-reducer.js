import { combineReducers } from 'redux'
import typeReducer from './fake-reducer'

const rootReducer = combineReducers({
  type: typeReducer
})

export default rootReducer
