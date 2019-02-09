import { SET_PREMIUM, SET_ERROR_MESSAGE, CLEAR_ERROR_MESSAGE } from './actionTypes'

export const setPremium = (premium)=>{
    return {
        type:SET_PREMIUM,
        premium,
    }
}

export const setErrorMessage = (message)=>{
    return {
        type:SET_ERROR_MESSAGE,
        message,
    }
}

export const clearErrorMessage = ()=>{
    return {
        type:CLEAR_ERROR_MESSAGE,
    }
}