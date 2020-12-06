import React, { Component } from 'react'

import GroupListItem from "../group-list-item/group-list-item.component"

import {connect} from "react-redux"

import "./group-list.styles.scss"
class GroupList extends Component {
    constructor(props){
        super(props)
    }


    render() {

        console.log(this.props)
        return (
            <div className="group-list">
                {
                    this.props.groups.length === 0 ?
                    <h4>There are no groups defined. create one</h4> :
                    <h4>There are {this.props.groups.length} number of groups</h4>
                }
                {
                    this.props.groups.map((item) => <GroupListItem key={item.name} item={item} />)
                }
            </div>
        )
    }
}


const mapStateToProps = (state)=>{
    // console.log(state)
    return {
        groups: state.group.groups
    }
}

export default connect(mapStateToProps, null)(GroupList);
