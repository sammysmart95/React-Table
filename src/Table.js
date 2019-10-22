import React from 'react';
import Table from 'react-bootstrap/Table';

const Table_Update = ({ allUsers }) => <Table striped bordered hover>
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
        {allUsers.map((user, i) => <tr>
            <td>{i + 1}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.birthday}</td>
            <td>{user.age}</td>
            <td>{user.hobby}</td>
        </tr>
        )}
    </tbody>
</Table>

export default Table_Update;