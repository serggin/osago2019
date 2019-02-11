import {SET_OWNER, SET_REGISTRATION, SET_TYPETC, SET_POWERTC,SET_TERM, SET_FIXED_TERM, SET_PERIOD,SET_REGIONS} from '../actions/actionTypes'

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


export function powerTCReducer (state = 'p0', action) {
    switch (action.type) {
        case SET_POWERTC:
            return action.powerTC

        default:
            return state
    }
}

export function termReducer (state = 't12', action) {
    switch (action.type) {
        case SET_TERM:
            return action.term

        default:
            return state
    }
}
export function fixedTermReducer (state = 't12', action) {
    switch (action.type) {
        case SET_FIXED_TERM:
            return action.term

        default:
            return state
    }
}

export function periodReducer (state = 't0', action) {
    switch (action.type) {
        case SET_PERIOD:
            return action.period

        default:
            return state
    }
}

export function regionsReducer (state = 't0', action) {
    switch (action.type) {
        case SET_REGIONS:
            return action.regions

        default:
            return state
    }
}