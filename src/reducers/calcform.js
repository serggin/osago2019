import {SET_OWNER, SET_REGISTRATION} from '../actions/actionTypes'

export function ownerReducer (state = 'fiz', action) {
    switch (action.type) {
        case SET_OWNER:
            return action.owner

        default:
            return state
    }
}

export function registrationReducer (state = 'regRu', action) {
    switch (action.type) {
        case SET_REGISTRATION:
            return action.registration

        default:
            return state
    }
}

