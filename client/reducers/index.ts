import { combineReducers } from 'redux'

import userReducers from './users'
import disputeReducers from './disputes'

const users = userReducers
const disputes = disputeReducers

export default combineReducers({
  users,
  disputes,
})
