import { combineReducers } from 'redux'

import disputeReducers from './disputes'

import userReducer from './users'

export default combineReducers({
  disputeReducers,
  userReducer,

})
