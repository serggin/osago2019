import { SET_PREMIUM, SET_ERROR_MESSAGE, CLEAR_ERROR_MESSAGE } from '../actions/actionTypes'

export function premiumReducer (state = 0, action) {
    switch (action.type) {
        case SET_PREMIUM:
            return action.premium

        default:
            return state
    }
}

export function errorMessageReducer (state = false, action) {
    switch (action.type) {
        case SET_ERROR_MESSAGE:
            return action.message
        case CLEAR_ERROR_MESSAGE:
            return false

        default:
            return state
    }
}