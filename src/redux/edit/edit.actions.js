import EditActionTypes from './edit.types'

export const setEditUsers = (payload) => {
    return {
        type: EditActionTypes.SET_EDIT_USERS,
        payload: payload
    }
}

export const addUser = (user) => {
    return {
        type: EditActionTypes.ADD_USER,
        payload: user
    }
}

export const removeUser = (user) => {
    return {
        type: EditActionTypes.REMOVE_USER,
        payload: user
    }
}

export const setSortOrder = (order) => {
    return{
        type: EditActionTypes.SET_SORT_ORDER,
        payload: order
    }
}