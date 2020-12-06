import GroupActionTypes from "./group.types"


export const createGroup = (payload)=>{

    // console.log('createGropu ', payload)
    return {
        type: GroupActionTypes.CREATE_GROUP,
        payload: payload
    }
}

export const removeGroup = (payload) => {
    return {
        type: GroupActionTypes.REMOVE_GROUP,
        payload: payload
    }
}

