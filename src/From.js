import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import Table from './Table.js';

import { addUser, deleteUser } from './action/usersAction'


const User = ({ users, addUser, deleteUser }) => {

    const [formState, setFormState] = useState({
        id: '',
        firstName: "",
        lastName: "",
        birthday: "",
        age: "",
        hobby: "",
    })

    const handleInputChange = e => {
        const { name, value } = e.target
        setFormState({
            ...formState,
            [name]: value
        })
    }


    const submit = e => {
        e.preventDefault()
        if(formState.id){
            users = users.map(users => {
                if(formState.id === users.id){
                    return {...users, formState}
                }
                return users
            })
        }else{
            addUser({...formState, id: Math.random() * 5000})
        }

        clearForm()
    }

    const clearForm = e => {
        setFormState({
            id: '',
            firstName: "",
            lastName: "",
            birthday: "",
            age: "",
            hobby: "",
        })
    }

    const editUser = user => {
        setFormState({
            ...formState,
            ...user
        })
    }

    const removeUser = index => {
        deleteUser(index)
    }

    return <div className='row'>
        <div className="form col-md-6">
            <Form onSubmit={submit}>
                <Form.Group controlid="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" value={formState.firstName} name="firstName" onChange={handleInputChange} required />
                </Form.Group>

                <Form.Group controlid="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" value={formState.lastName} name="lastName" onChange={handleInputChange} required />
                </Form.Group>

                <Form.Group controlid="birthDay">
                    <Form.Label>Birthday</Form.Label>
                    <Form.Control type="date" value={formState.birthday} name="birthday" onChange={handleInputChange} required />
                </Form.Group>

                <Form.Group controlId="age">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" value={formState.age} name="age" onChange={handleInputChange} required />
                </Form.Group>

                <Form.Group controlId="hobby">
                    <Form.Label>Hobby</Form.Label>
                    <Form.Control type="text" value={formState.hobby} name="hobby" onChange={handleInputChange} required />
                </Form.Group>
                <Button variant="success" type="submit">
                    {formState.id ? "Edit" : "Submit"}
                </Button>
                <Button variant="secondary" onClick={clearForm} className="pull-right" style={{
                    float: 'right'
                }} >
                    Clear
                </Button>
            </Form>
            <br />
        </div >
        <div className="col-md-6">
            <Table allUsers={users} editUser={editUser} deleteUser={removeUser} />
        </div>
    </div>
};

const mapStateToProps = state => {
    console.log(state)
    return {
        users: state.users
    }
}

const mapDispatchToProps = dispatch => ({
    addUser: (userData) => dispatch(addUser(userData)),
    deleteUser: index => dispatch(deleteUser(index))
})


export default connect(mapStateToProps, mapDispatchToProps)(User);

// class User extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             id: '',
//             firstName: "",
//             lastName: "",
//             birthday: "",
//             age: "",
//             hobby: "",
//             allUsers: []
//         }
//     }

//     const User = ({ users, addUser }) => {

//     }
//     const handleInputChange = e => {
//         const { name, value } = e.target


//     }

//     changeFirstName(e) {
//         this.setState({ firstName: e.target.value })
//     }

//     changeLastName(e) {
//         this.setState({ lastName: e.target.value })
//     }

//     changeBirthday(e) {
//         this.setState({ birthday: e.target.value })
//     }

//     changeAge(e) {
//         this.setState({ age: e.target.value })
//     }

//     changeHobby(e) {
//         this.setState({ hobby: e.target.value })
//     }

//     submit(e) {
//         e.preventDefault()

//         const { id, firstName, lastName, birthday, age, hobby, allUsers } = this.state
//         let nextAllUsers = allUsers
//         if (id) {
//             nextAllUsers = nextAllUsers.map(user => {
//                 if (user.id === id) {
//                     return { ...user, firstName, lastName, birthday, age, hobby, allUsers }
//                 }
//                 return user
//             })
//         } else {
//             nextAllUsers.push({ id: Math.random(), firstName, lastName, birthday, age, hobby })
//         }
//         this.setState({ id: '', firstName: "", lastName: "", birthday: "", age: "", hobby: "", allUsers: nextAllUsers })
//     }

//     clearForm = () => {
//         this.setState({ id: '', firstName: "", lastName: "", birthday: "", age: "", hobby: "" })
//     }

//     deleteUser = user => {
//         this.setState({
//             ...this.state,
//             allUsers: this.state.allUsers.filter(use => use.id !== user.id)
//         })
//     }

//     editUser = user => {
//         this.setState({
//             ...this.state,
//             ...user
//         })
//     }


//     render() {
//         const { allUsers } = this.state
//         return (
//             <div className='row'>
//                 <div className="form col-md-6">
//                     <Form onSubmit={this.submit}>
//                         <Form.Group controlid="firstName">
//                             <Form.Label>First Name</Form.Label>
//                             <Form.Control type="text" value={this.state.firstName} onChange={this.changeFirstName} />
//                         </Form.Group>

//                         <Form.Group controlid="lastName">
//                             <Form.Label>Last Name</Form.Label>
//                             <Form.Control type="text" value={this.state.lastName} onChange={this.changeLastName} />
//                         </Form.Group>

//                         <Form.Group controlid="birthDay">
//                             <Form.Label>Birthday</Form.Label>
//                             <Form.Control type="date" value={this.state.birthday} onChange={this.changeBirthday} />
//                         </Form.Group>

//                         <Form.Group controlId="age">
//                             <Form.Label>Age</Form.Label>
//                             <Form.Control type="number" value={this.state.age} onChange={this.changeAge} />
//                         </Form.Group>

//                         <Form.Group controlId="hobby">
//                             <Form.Label>Hobby</Form.Label>
//                             <Form.Control type="text" value={this.state.hobby} onChange={this.changeHobby} />
//                         </Form.Group>
//                         <Button variant="success" type="submit">
//                             {this.state.id ? "Edit" : "Submit"}
//                         </Button>
//                         <Button variant="secondary" onClick={this.clearForm} className="pull-right" style={{
//                             float: 'right'
//                         }} >
//                             Clear
//                         </Button>
//                     </Form>
//                     <br />
//                 </div >
//                 <div className="col-md-6">
//                     <Table allUsers={allUsers} editUser={this.editUser} deleteUser={this.deleteUser} />

//                 </div>

//             </div>
//         );
//     }
// }

//export default User;  