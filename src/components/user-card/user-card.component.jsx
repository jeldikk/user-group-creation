import React from 'react'
import {connect} from 'react-redux'
import {Button} from "react-bootstrap"

import "./user-card.styles.scss"
import { addUser, removeUser } from '../../redux/edit/edit.actions'


const UserCard = ({user, addUser, removeUser}) => {

    const {id, name, Image, selected} = user
    // console.log(user)

    return (
        <div className="user-card">
            <div className={`img-container ${selected ? 'selected' : ''}`}>
                <img className="img" src={Image} alt={`${name}-${id}`} />
            </div>
            <div className="img-description text-center">
                {name}
            </div>

            {
                selected ?
                <Button variant="danger" className="my-button" onClick={() => removeUser(user)}>Remove User</Button> :
                <Button variant="warning" className="my-button" onClick={() => addUser(user)}>Add User</Button>
            }
            {/* // <Button variant="warning" className="my-button">Add to Group</Button> */}
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (user) => dispatch(addUser(user)),
        removeUser: (user) => dispatch(removeUser(user))
    }
}

export default connect(null, mapDispatchToProps)(UserCard)
