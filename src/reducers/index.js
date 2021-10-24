import { combineReducers } from 'redux'
import { authReducer } from './authReducer'
import { builderReducer } from './builderReducer'

export default combineReducers({
  auth: authReducer,
  builder: builderReducer
})
