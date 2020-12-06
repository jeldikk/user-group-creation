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
        // case UserActionTypes.ASC_ORDER:
        //     return {
        //         ...state,
        //         users: ascendingOrdered()
        //     }
        // case UserActionTypes.DSC_ORDER:
        //     return {
        //         ...state,
        //         users: descedingOrdered()
        //     }
        default:
            return state
    }
}

export default usersReducer