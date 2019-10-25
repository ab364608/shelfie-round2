import React, { Component } from 'react';
import axios from 'axios';
import store, {INVENTORY_LIST} from '../../donald ducks/store';
import {HashRouter, Link} from 'react-router-dom';

//Components

import Product from '../Product/Product';

export default class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            inventoryList: store.getState().inventoryList
        }
    }

    componentDidMount() {
        this.viewInventory();
        store.subscribe(() => {
            this.setState({ inventoryList: store.getState().inventoryList })
        })
    }

    viewInventory = () => {
        axios.get('/api/inventory')
            .then(response => {
                store.dispatch({
                    type: INVENTORY_LIST,
                    payload: response.data
                })
            }).catch(err => console.log(err))
    }

    deleteProduct = (id) => {
        axios.delete(`/api/inventory/${id}`).then(response => {
                store.dispatch({
                    type: INVENTORY_LIST,
                    payload: response.data
                })
        })
    }

    render() {
        const { inventoryList } = this.state;
        console.log(inventoryList)

        const myInventory = inventoryList.map((val, i) => {
            console.log(val)
            return (
                <Product
                    key={i}
                    product={val}
                    inventory={inventoryList}
                    deleteProduct={this.deleteProduct}
                />

            )
        })

        return (
            <HashRouter>
                <Link to='/'><div>Dashboard</div></Link>
                {myInventory}
            </HashRouter>

        )
    }
}