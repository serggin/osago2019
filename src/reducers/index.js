import { combineReducers } from 'redux'
import {premiumReducer, errorMessageReducer} from './premium'
import {ownerReducer} from './calcform'

const appReducer = combineReducers({
    premium: premiumReducer,
    errorMessage: errorMessageReducer,
    owner: ownerReducer,
})

export default appReducer