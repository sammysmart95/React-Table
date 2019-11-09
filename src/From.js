import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import Table from './Table.js';

import { addUser, deleteUser, editUser } from './action/usersAction'


const User = ({ users, addUser, deleteUser, editUser }) => {

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
               editUser(formState)
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

    const edit = user => {
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
            <Table allUsers={users} editUser={edit} deleteUser={removeUser} />
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
    deleteUser: index => dispatch(deleteUser(index)),
    editUser: user => dispatch(editUser(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(User);