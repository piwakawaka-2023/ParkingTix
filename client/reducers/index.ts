import { combineReducers } from 'redux'

import userReducers from './users'
import disputeReducers from './disputes'
import emailReducers from './emails'

const users = userReducers
const disputes = disputeReducers
const emails = emailReducers

export default combineReducers({
  users,
  disputes,
  emails,
})
