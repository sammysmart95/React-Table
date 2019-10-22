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
            firstName: "",
            lastName: "",
            birthDay: "",
            age: "",
            hobby: "",
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


        // const studentObject = {
        //     firstName: this.state.firstName,
        //     lastName: this.state.lastName,
        //     birthDay: this.state.birthday,
        //     age: this.state.age,
        //     hobby: this.state.hobby,
        // }

        console.log(`List of Student created`);
        console.log(`First Name: ${this.state.firstName}`);
        console.log(`Last Name: ${this.state.lastName}`);
        console.log(`Birthday: ${this.state.birthday}`);
        console.log(`Age: ${this.state.age}`);
        console.log(`Hooby: ${this.state.hobby}`);


        this.setState({ firstName: "", lastName: "", birthday: "", age: "", hobby: "" })
    }


    render() {
        return (
            <div className="form">
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
               <Table_Update />
            </div >
        );
    }
}

export default User; 