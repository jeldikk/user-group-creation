import React, { Component } from 'react'

import {Button} from 'react-bootstrap'
import {connect} from 'react-redux'

import {removeGroup} from "../../redux/group/group.actions"

import "./group-list-item.styles.scss"

class GroupListItem extends Component {
    constructor(props){
        super(props);

        this.state = {

        }
    }
    render() {

        let {name, description} = this.props.item
        return (
            <div className="group-list-item shadow-lg">
                <div className="name text-center">{name}</div>
                <div className="description text-center">{description}</div>
                <div className="buttons ml-auto">
                    {/* <Button variant="primary">Edit</Button> */}
                    <Button variant="danger" onClick={() => this.props.removeGroup(name)}>Remove</Button>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        removeGroup: (group) => dispatch(removeGroup(group))
    }
}
export default connect(null, mapDispatchToProps)(GroupListItem)
