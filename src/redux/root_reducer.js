import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import groupReducer from "./group/group.reducer"
import userReducer from "./users/users.reducers"
import editReducer from "./edit/edit.reducers"

const persistConfig = {
    key: 'user-group-root',
    storage,
    whitelist: ['group', 'users']
}


const rootReducer = combineReducers({
    group: groupReducer,
    users: userReducer,
    edit: editReducer
})
export default persistReducer(persistConfig, rootReducer)