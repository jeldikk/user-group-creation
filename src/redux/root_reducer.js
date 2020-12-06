import {combineReducers} from 'redux'

import groupReducer from "./group/group.reducer"
import userReducer from "./users/users.reducers"
import editReducer from "./edit/edit.reducers"

export default combineReducers({
    group: groupReducer,
    users: userReducer,
    edit: editReducer
})