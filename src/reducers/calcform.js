import {SET_OWNER, SET_REGISTRATION, SET_TYPETC } from '../actions/actionTypes'

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

export function typeTCReducer (state = 'tc22', action) {
//    console.error('typeTCReducer action.type='+action.type)
    switch (action.type) {
        case SET_TYPETC:
            return action.typeTC

        default:
            return state
    }
}
