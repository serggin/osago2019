import {SET_OWNER, SET_REGISTRATION, SET_TYPETC, SET_TRAILER,SET_POWERTC,
        SET_TERM,  SET_FIXED_TERM, SET_PERIOD,SET_REGIONS,SET_CITY,
        SET_CRIME, SET_LIMIT, SET_AGE,SET_DRIVINGSTAGE,SET_FIXED_PERIOD,
        SET_KBM, SET_PERIOD_KBM,

} from '../actions/actionTypes'

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

export function trailerReducer (state=null, action) {
    switch (action.type) {
        case SET_TRAILER:
            return action.trailer

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

export function fixedPeriodReducer (state = null, action) {
    switch (action.type) {
        case SET_FIXED_PERIOD:
            return action.period

        default:
            return state
    }
}

export function regionsReducer (state = 'r90', action) {
    switch (action.type) {
        case SET_REGIONS:
            return action.regions

        default:
            return state
    }
}

export function cityReducer (state = null, action) {
    switch (action.type) {
        case SET_CITY:
            return action.city

        default:
            return state
    }
}
export function crimeReducer (state = null, action) {
    switch (action.type) {
        case SET_CRIME:
            return action.crime

        default:
            return state
    }
}
export function limitReducer (state = false, action) {
    switch (action.type) {
        case SET_LIMIT:
            return action.limit

        default:
            return state
    }
}

export function ageReducer (state = 'de0', action) {
    switch (action.type) {
        case SET_AGE:
            return action.age

        default:
            return state
    }
}

export function drivingstageReducer (state = null, action) {
    switch (action.type) {
        case SET_DRIVINGSTAGE:
            return action.drivingstage

        default:
            return state
    }
}

export function kbmReducer (state = 'kbm1', action) {
    switch (action.type) {
        case SET_KBM:
            return action.kbm

        default:
            return state
    }
}

export function periodKbmReducer (state = null, action) {
    switch (action.type) {
        case SET_PERIOD_KBM:
            return action.periodKbm

        default:
            return state
    }
}