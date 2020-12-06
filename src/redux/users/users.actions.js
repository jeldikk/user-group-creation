import UserActionTypes from "./users.types"


export const setUsers = (payload) => {
    return {
        type: UserActionTypes.SET_USERS,
        payload: payload
    }
}