

import {createSelector} from 'reselect'


const selectUsers = (state) => state.users

export const selectUserList = createSelector(
    [selectUsers],
    (users) => users.users
)


export const selectAscOrdered = createSelector(
    [selectUsers],
    (users) => users.sort((a,b) => {
        if(a.name>b.name){
            return 1;
        }
        else if(a.name<b.name){
            return -1;
        }
        else{
            return 0;
        }
    })
)

export const selectDscOrdered = createSelector(
    [selectUsers],
    (users) => users.sort((a,b) => {
        if(a.name>b.name){
            return -1;
        }
        else if(a.name<b.name){
            return 1;
        }
        else{
            return 0;
        }
    })
)

export const selectOrdered = (order) => {

    if(order){

        return selectAscOrdered
    }
    else{
        return selectDscOrdered
    }
}

// export const selectedOrdered 