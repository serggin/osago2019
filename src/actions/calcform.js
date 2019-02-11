import {SET_OWNER, SET_REGISTRATION, SET_TYPETC, SET_POWERTC, SET_TERM,SET_FIXED_TERM, SET_PERIOD,SET_REGIONS} from './actionTypes'

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
//    console.warn('setTypeTC', typeTC)
    return {
        type:SET_TYPETC,
        typeTC,
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

export const setRegions = (regions)=>{
    return {
        type:SET_REGIONS,
        regions,
    }
}

