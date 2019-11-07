import React from 'react';
import {Provider} from 'react-redux'
import configureStore from './configureStore'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import User from './From.js';
import {Card} from 'react-bootstrap';
// import Thing from './thing';

const store = configureStore()

function App() {
  return (
    <Provider store={store} >
    <div className="App">
      <Card body>
        <Card.Title className="heading">
          <h1>React Table Update</h1>
        </Card.Title>
        <br />

        <User className="user" />
      </Card>
      {/* <Thing /> */}
    </div>
    </Provider>
  );
}

export default App;
