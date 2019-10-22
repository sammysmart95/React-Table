import React from 'react';
import Table from 'react-bootstrap/Table';

class Table_Update extends React.Component {

    render() {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Birthday</th>
                        <th>Age</th>
                        <th>Hobby</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        {/* <td>{this.state.firstName}</td>
                        <td>{this.state.lastName}</td>
                        <td>{this.state.birthDay}</td>
                        <td>{this.state.age}</td>
                        <td>{this.state.hobby}</td> */}

                        <td>Samuel</td>
                        <td>Smart</td>
                        <td>come</td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}

export default Table_Update;