import UserActionTypes from "./users.types"

// import {selectAscOrdered, selectDscOrdered} from "./users.selectors"

const INITIAL_STATE = {
    users: []
}

const usersReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case UserActionTypes.SET_USERS:
            return {
                ...state,
                users: action.payload
            }
        default:
            return state
    }
}

export default usersReducer