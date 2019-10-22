import React from 'react';
import Table from 'react-bootstrap/Table';

const Table_Update = ({ allUsers }) => <div>
    {allUsers.length ? <Table striped bordered hover>
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
            {allUsers.map((user, i) => <tr key={i} >
                <td>{i + 1}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.birthday}</td>
                <td>{user.age}</td>
                <td>{user.hobby}</td>
                <td></td>
            </tr>
            )}
        </tbody>
    </Table>
        : <h4 className='text-center' >No user added</h4>}
</div>

export default Table_Update;