import React, {Component} from 'react';
import './App.css';
// import axios from 'axios';
// import store, {INVENTORY_LIST} from './donald ducks/store';

//Components

import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';

export default class App extends Component {

  render() {

    return(
      <div>
        <Header />
        <Form />
        <Dashboard />
      </div>
    )
  }
}