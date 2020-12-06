import React from 'react'
import {connect} from 'react-redux'

import "./users-preview.styles.scss"

import {selectEditOrdered} from "../../redux/edit/edit.selectors"
import {selectEditUsers} from "../../redux/edit/edit.selectors"

import UserCard from "../user-card/user-card.component"

const UsersPreview = ({orderedList, order=null}) => {
    // console.log('userpreview',props)
    // let {orderedList, onAdd, onRemove, order} = props
    // let orderedList = userList.map(user => ({...user}));
    // if(!order){
        
    //     if(order){
    //         userList.sort((a,b)=>{
    //             if(a.name > b.name){
    //                 return -1
    //             }
    //             else if(a.name < b.name){
    //                 return 1
    //             }
    //             else{
    //                 return 0
    //             }
    //         })
    //     }
    //     else{
    //         userList.sort((a,b) => {
    //             if(a.name > b.name){
    //                 return 1
    //             }
    //             else if(a.name < b.name){
    //                 return -1
    //             }
    //             else{
    //                 return 0;
    //             }
    //         })
    //     }
        
    // }
    // console.log('orderedList is ', orderedList)
    // else{
    //     orderedList = userList;
    // }
    

    return (
        <div className='user-preview'>
            {
                // orderedList.map( user => <UserCard key={user.id} user={user} onAdd={onAdd} onRemove={onRemove} />)
                orderedList.map(user => <UserCard key={user.id} user={user} />)
            }
        </div>
    )
}



const mapStateToProps = (state) => {
    // console.log(state, actualProps);
    return {
        orderedList: selectEditOrdered(state)
        // orderedList: selectEditUsers(state.edit)
    }
}


export default connect(mapStateToProps)(UsersPreview);
