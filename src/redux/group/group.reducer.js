import GroupActionTypes from "./group.types"

const INITIAL_STATE = {
    groups: []
}

const groupReducer = (state=INITIAL_STATE, action)=>{

    // console.log('groupReducer is ', action.payload)

    switch(action.type){
        case GroupActionTypes.CREATE_GROUP:
            return {
                ...state,
                groups: [...state.groups, action.payload ]
            }
        case GroupActionTypes.REMOVE_GROUP:
            return {
                ...state,
                groups: state.groups.filter((grp) => grp.name !== action.payload)
            }
        default:
            return state
    }

}

export default groupReducer