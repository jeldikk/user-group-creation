import {createSelector} from 'reselect'

// const selectEdit = (state) => {
//     console.log(state);
//     return state.edit
// }

const selectEdit = (state) => state.edit


// const selectSortOrder = (state) => state.order

// export const selectEditUsers = (state) => {
//     console.log('state is', state)
//     return state.users
// }

export const selectEditUsers = createSelector(
    [selectEdit],
    (edit) => edit.users
)

export const selectSortOrder = createSelector(
    [selectEdit],
    (edit) => edit.order
)


export const selectIncOrderUsers = createSelector(
    [selectEditUsers],
    (users) => [...users].sort((a,b) => {
        if(a.name > b.name){
            return -1
        }
        else if(a.name < b.name){
            return 1
        }
        else{
            return 0;
        }
    })
)

export const selectDecOrderUsers = createSelector(
    [selectEditUsers],
    (users) => [...users].sort((a,b) => {
        if(a.name > b.name){
            return 1
        }
        else if(a.name < b.name){
            return -1
        }
        else{
            return 0;
        }
    })
)

// export const selectEditOrdered = (order) => {
//     if(!order){
//         if(order){
//             return selectIncOrderUsers
//         }
//         else{
//             return selectDecOrderUsers
//         }
//     }
//     else{
//         return selectEditUsers
//     }
// }

export const selectEditOrdered = createSelector(
    [selectEditUsers, selectSortOrder],
    (users, order) => {
        console.log("calling from selectEditOrdered")
        console.log('users is',users)
        console.log('order is', order)
        if(order !== null){
            // do if asc or dsc
            
            if(users.length === 0){
                return users
            }
            else
                return [...users].sort((a,b) => {
                        // console.log(a,b)
                        if(a.name > b.name){
                            if(order)
                                return 1
                            else
                                return -1
                        }
                        else if(a.name < b.name){
                            if(order)
                                return -1
                            else
                                return 1
                        }
                        else{
                            return 0;
                        }

                    })
        }
        else{
            return users
        }
    }
)