import { combineReducers } from 'redux'
import typeReducer from './typeReducer'

const rootReducer = combineReducers({
  pokeTypes: typeReducer
})

export default rootReducer
