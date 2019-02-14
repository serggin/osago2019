import {SET_OWNER, SET_REGISTRATION, SET_TYPETC,SET_TRAILER, SET_POWERTC,
        SET_TERM,SET_FIXED_TERM, SET_PERIOD,SET_REGIONS,SET_CITY,
        SET_CRIME,SET_LIMIT,SET_AGE,SET_DRIVINGSTAGE,SET_FIXED_PERIOD

} from './actionTypes'

export const setOwner = (owner)=>{
    return {
        type:SET_OWNER,
        owner,
    }
}

export const setRegistration = (registration)=>{
    return {
        type:SET_REGISTRATION,
        registration,
    }
}

export const setTypeTC = (typeTC)=>{
    return {
        type:SET_TYPETC,
        typeTC,
    }
}

export const setTrailer = (trailer)=>{
    return {
        type: SET_TRAILER,
        trailer,
    }
}

export const setPowerTC = (powerTC)=>{
    return {
        type:SET_POWERTC,
        powerTC,
    }
}

export const setTerm = (term)=>{
    return {
        type:SET_TERM,
        term,
    }
}

export const setFixedTerm = (term)=>{
    return {
        type:SET_FIXED_TERM,
        term,
    }
}

export const setPeriod = (period)=>{
    return {
        type:SET_PERIOD,
        period,
    }
}

export const setFixedPeriod = (period)=>{
    return {
        type:SET_FIXED_PERIOD,
        period,
    }
}

export const setRegions = (regions)=>{
    return {
        type:SET_REGIONS,
        regions,
    }
}
export const setCity = (city)=>{
    return {
        type:SET_CITY,
        city,
    }
}
export const setCrime = (crime)=>{
    return {
        type:SET_CRIME,
        crime,
    }
}
export const setLimit = (limit)=>{
    return {
        type:SET_LIMIT,
        limit,
    }
}
export const setAge = (age)=>{
    return {
        type:SET_AGE,
        age,
    }
}

export const setDrivingstage = (city)=>{
    return {
        type:SET_DRIVINGSTAGE,
        city,
    }
}

