import { SET_OWNER, SET_REGISTRATION } from './actionTypes'

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