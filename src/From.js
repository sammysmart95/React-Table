import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table_Update from './Table.js';



class User extends React.Component {
    constructor(props) {
        super(props);
        this.changeFirstName = this.changeFirstName.bind(this);
        this.changeLastName = this.changeLastName.bind(this);
        this.changeBirthday = this.changeBirthday.bind(this);
        this.changeAge = this.changeAge.bind(this);
        this.changeHobby = this.changeHobby.bind(this);
        this.submit = this.submit.bind(this);

        this.state = {
            id: '',
            firstName: "",
            lastName: "",
            birthday: "",
            age: "",
            hobby: "",
            allUsers: []
        }
    }


    changeFirstName(e) {
        this.setState({ firstName: e.target.value })
    }

    changeLastName(e) {
        this.setState({ lastName: e.target.value })
    }

    changeBirthday(e) {
        this.setState({ birthday: e.target.value })
    }

    changeAge(e) {
        this.setState({ age: e.target.value })
    }

    changeHobby(e) {
        this.setState({ hobby: e.target.value })
    }

    submit(e) {
        e.preventDefault()
        const { id, firstName, lastName, birthday, age, hobby, allUsers } = this.state
        let nextAllUsers = allUsers
        if (id) {
            nextAllUsers = nextAllUsers.map(user => {
                if (user.id === id) {
                    return { ...user, firstName, lastName, birthday, age, hobby, allUsers }
                }
                return user
            })
        } else {
            nextAllUsers.push({ id: Math.random(), firstName, lastName, birthday, age, hobby })
        }
        this.setState({ id: '', firstName: "", lastName: "", birthday: "", age: "", hobby: "", allUsers: nextAllUsers })
    }

    deleteUser = user => {
        this.setState({
            ...this.state,
            allUsers: this.state.allUsers.filter(use => use.id !== user.id)
        })
    }

    editUser = user => {
        this.setState({
            ...this.state,
            ...user
        })
    }


    render() {
        const { allUsers } = this.state
        return (
            <div className='row'>
                <div className="form col-md-6">
                    <Form onSubmit={this.submit}>
                        <Form.Group controlid="firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" value={this.state.firstName} onChange={this.changeFirstName} />
                        </Form.Group>

                        <Form.Group controlid="lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" value={this.state.lastName} onChange={this.changeLastName} />
                        </Form.Group>

                        <Form.Group controlid="birthDay">
                            <Form.Label>Birthday</Form.Label>
                            <Form.Control type="date" value={this.state.birthday} onChange={this.changeBirthday} />
                        </Form.Group>

                        <Form.Group controlId="age">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="number" value={this.state.age} onChange={this.changeAge} />
                        </Form.Group>

                        <Form.Group controlId="hobby">
                            <Form.Label>Hobby</Form.Label>
                            <Form.Control type="text" value={this.state.hobby} onChange={this.changeHobby} />
                        </Form.Group>

                        <Button variant="success" size="lg" block="block" type="submit">
                            Submit
                    </Button>
                    </Form>
                    <br />
                </div >
                <div className="col-md-6">
                    <Table_Update allUsers={allUsers} editUser={this.editUser} deleteUser={this.deleteUser} />

                </div>

            </div>
        );
    }
}

export default User;  