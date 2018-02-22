import { combineReducers } from 'redux'
import typeReducer from './fake-reducer'

const rootReducer = combineReducers({
  pokeTypes: typeReducer
})

export default rootReducer
