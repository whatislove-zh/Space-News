import {SET_ERROR, SET_LOADING, SET_POSTS} from "./posts-actions"

const initialState = {
    status: "idle", //loading | received | rejected
    error: null,
    list: [],
}

export const postsReduser = (state = initialState, {type, payload}) => {
    switch(type){
        case SET_LOADING:
            return ({
                ...state,
                status: "loading"
            })
        case SET_ERROR:
            return ({
                ...state,
                status : "rejected",
                error: payload,
            })
        case SET_POSTS:
            return ({
                ...state,
                status: "received",
                list: payload 
            })
        default:
            return state
    }
}