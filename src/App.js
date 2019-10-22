import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
// import store, {INVENTORY_LIST} from './donald ducks/store';

//Components

import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      inventoryList: []
    }
  }

  componentDidMount() {
    this.viewInventory();
  }

  viewInventory = () => {
    axios.get('/api/inventory')
    .then(response => {
      this.setState({inventoryList: response.data})
    })
  }

  render() {

    return(
      <div>
        <Header />
        <Form />
        <Dashboard inventoryList={this.state.inventoryList}/>
      </div>
    )
  }
}