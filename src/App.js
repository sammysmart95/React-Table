import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import User from './From.js';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <div className="App">
      <Card body>
        <Card.Title className="React">
          <h1>React Auto Update Table</h1>
        </Card.Title>
        <br />

        <User className="user" />
      </Card>
    </div>
  );
}

export default App;
