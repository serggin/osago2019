import { combineReducers } from 'redux'
import {premiumReducer, errorMessageReducer} from './premium'
import {ownerReducer, registrationReducer, typeTCReducer, powerTCReducer,termReducer,fixedTermReducer,periodReducer,
    regionsReducer, cityReducer} from './calcform'

const appReducer = combineReducers({
    premium: premiumReducer,
    errorMessage: errorMessageReducer,
    owner: ownerReducer,
    registration: registrationReducer,
    typeTC: typeTCReducer,
    powerTC: powerTCReducer,
    term: termReducer,
    fixedTerm: fixedTermReducer,
    period: periodReducer,
    regions: regionsReducer,
    city: cityReducer
})

export default appReducer