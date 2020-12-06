import React from 'react'
import axios from 'axios'

import {Container, Form, Button} from 'react-bootstrap'

import {connect} from "react-redux"

import {withRouter} from 'react-router-dom'

import UserCard from '../../components/user-card/user-card.component'

import {createGroup} from "../../redux/group/group.actions"


// import {selectAscOrdered, selectDscOrdered} from "../../redux/users/users.selectors"
import {selectUserList} from "../../redux/users/users.selectors"
import {setUsers} from "../../redux/users/users.actions"

import {setEditUsers, setSortOrder} from "../../redux/edit/edit.actions"

import "./create-group-page.styles.scss"
import UsersPreview from "../../components/users-preview/users-preview.component"

class CreateGroupPage extends React.Component{

    constructor(props){
        super(props)
        console.log('creategrouppage constructor ', props)
        this.state = {
            users: [],
            name: '',
            description: '',
            ascending: true
        }
    }

    componentDidMount(){

        console.log("componenet mounted")

        const fetchData = async () => {
            const results = await axios.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json");
            console.log(results.data)
            this.props.setUsers(results.data)
            const mod_data = results.data.map((user) => ({...user, selected:false}))
            this.props.setEditUsers(mod_data)
            this.setState({users: mod_data})

        }
        
        fetchData();


    }

    handleOnChange = (event) => {

        const {name, value} = event.target;

        this.setState({[name]: value})

    }

    onFormSubmit = (event)=>{
        event.preventDefault();

        // console.log(this.state)
        // console.log("form submitted")

        
        const {name, description} = this.state

        if(name.length === 0 || description.length === 0){
            console.error("Cannot take an empty information")
            return
        }
        const selectedUsers = this.state.users.filter(user => user.selected)

        this.props.createGroup({
            name,
            description,
            selected: selectedUsers.map(suser => suser.id)
        })

        this.props.history.push("/")
    }

    /*
    We implemented the same in redux

    onUserAdd = (userid)=>{

        console.log('onUserAdd called by', userid)
        
        const updatedUsers = this.state.users.map((user) => {
            if(user.id === userid){
                return {
                    ...user,
                    selected: true
                }
            }
            else{
                return user
            }
        })

        this.setState({users: updatedUsers})
    }

    /*

    We have implemented the same in redux

    onUserRemove = (userid) => {

        console.log('onUserRemove called by ', userid)
        
        const updatedUsers = this.state.users.map((user)=>{
            if(user.id === userid){
                return {
                    ...user,
                    selected: false
                }
            }
            else{
                return user
            }
        })

        this.setState({users: updatedUsers})
    }

    */

    onSortOrderChange = (event) => {

        console.log(event);

        const {name, value} = event.target;

        // console.log(name, value)

        switch(value){
            case 'None':
                this.props.setSortOrder(null);
                break;
            case 'Ascending':
                this.props.setSortOrder(true);
                break;
            case 'Descending':
                this.props.setSortOrder(false);
                break;
        }
    }

    toggleOrder = () => {

        this.setState({
            ascending: !this.state.ascending
        })
    }

    render(){
        
        // const orderedUserList = this.state.ascending ? this.props.inc_ordered : this.props.dsc_ordered

        return (

            <div className="create-group-page">
                 <Container>
                     <h1>Create a New Group</h1>
                     <hr></hr>
    
                     <Form>
                         <Form.Group controlId="formGroupName">
                             <Form.Label>Name :</Form.Label>
                             <Form.Control type="text" placeholder="Group Name" name="name" value={this.state.name} onChange={this.handleOnChange} />
                         </Form.Group>
                         <Form.Group controlId="formGroupDescription">
                             <Form.Label>Description :</Form.Label>
                             <Form.Control as="textarea" rows={3} placeholder="Say Something about this group" name="description" value={this.state.description} onChange={this.handleOnChange} />
                         </Form.Group>

                         <h3>Select Users</h3>
                        <div className='sorting-container'>
                            <Form.Group className="sort-control">
                                <Form.Label>Sort by Name :</Form.Label>
                                <Form.Control as='select' name="sort_by_name" onChange={this.onSortOrderChange}>
                                    <option>None</option>
                                    <option>Ascending</option>
                                    <option>Descending</option>
                                </Form.Control>
                            </Form.Group>
                        </div>
                        
                            
                        <UsersPreview userList={this.state.users} onAdd={this.onUserAdd} onRemove={this.onUserRemove} order={this.state.ascending} />
                         
                         
                        <Button type="submit" variant="primary" size="lg" onClick={this.onFormSubmit}>Create Group</Button>
                     </Form>
                 </Container>
            </div>
        )
    }

}



const mapDispatchToProps = (dispatch) => {
    return {
        createGroup: (group_info) => dispatch(createGroup(group_info)),
        setUsers: (userList) => dispatch(setUsers(userList)),
        setEditUsers: (userList) => dispatch(setEditUsers(userList)),
        setSortOrder: (order) => dispatch(setSortOrder(order))
    }
}

const mapStateToProps = (state) => {
    return {
        userList: selectUserList(state)
    }
}

// const mapStateToProps = (state) => {
//     return {
//         inc_ordered: selectAscOrdered(state),
//         dsc_ordered: selectDscOrdered(state)
//     }
// }



// const mapStateToProps = (state, actualProps) => {
//     return {
//         orderedList: selectOrdered()
//     }
// }

export default connect(null, mapDispatchToProps)(withRouter(CreateGroupPage))
