import { combineReducers } from 'redux'
import {premiumReducer, errorMessageReducer} from './premium'






const appReducer = combineReducers({
    premium: premiumReducer,
    errorMessage: errorMessageReducer,

})

export default appReducer