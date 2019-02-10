import {SET_OWNER} from '../actions/actionTypes'

export function ownerReducer (state = 'fiz', action) {
    switch (action.type) {
        case SET_OWNER:
            return action.owner

        default:
            return state
    }
}
