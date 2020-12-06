import EditActionTypes from "./edit.types"

const INITIAL_STATE = {
    name: '',
    description: '',
    users:[],
    order: null
}

const editReducer = (state=INITIAL_STATE, action) => {

    switch(action.type){
        case EditActionTypes.ADD_USER:
            console.log('stae in editReducer', state)
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.payload.id){
                        return {
                            ...user,
                            selected: true
                        }
                    }
                    else{
                        return user
                    }
                })

            }
        case EditActionTypes.REMOVE_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.payload.id){
                        return {
                            ...user,
                            selected: false
                        }
                    }
                    else{
                        return user
                    }
                })
            }
        case EditActionTypes.SET_EDIT_USERS:
            return {
                ...state,
                users: action.payload
            }
        case EditActionTypes.SET_SORT_ORDER:
            return {
                ...state,
                order: action.payload
            }
        default:
            return state
    }
}

export default editReducer;