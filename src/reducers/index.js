import { combineReducers } from 'redux'
import {premiumReducer, errorMessageReducer} from './premium'
import {ownerReducer, registrationReducer} from './calcform'

const appReducer = combineReducers({
    premium: premiumReducer,
    errorMessage: errorMessageReducer,
    owner: ownerReducer,
    registration: registrationReducer,
})

export default appReducer