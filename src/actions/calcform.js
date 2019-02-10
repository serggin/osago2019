import { SET_OWNER} from './actionTypes'

export const setOwner = (owner)=>{
    return {
        type:SET_OWNER,
        owner,
    }
}

