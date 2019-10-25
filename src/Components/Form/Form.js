import React, {Component} from 'react';
import axios from 'axios';
import store, {UPDATE_NAME, UPDATE_PRICE, UPDATE_IMG} from '../../donald ducks/store';
// import {HashRouter, Link} from 'react-router-dom';

export default class Form extends Component {
    constructor() {
        super();

        this.state = {
            name: store.getState().name,
            price: store.getState().price,
            img: store.getState().img
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                name: store.getState().name,
                price: store.getState().price,
                img: store.getState().img
            });
        });
    }

    updateName = e => {
        store.dispatch({
            type: UPDATE_NAME,
            payload: e.target.value
        })
    }

    updatePrice = e => {
        store.dispatch({
            type: UPDATE_PRICE,
            payload: e.target.value
        })
    }

    updateImg = e => {
        store.dispatch({
            type: UPDATE_IMG,
            payload: e.target.value
        })
    }

    resetInput = () => {
        document.getElementById("input1").value = "";
        document.getElementById("input2").value = "";
        document.getElementById("input3").value = "";
    }

    createProduct = () => {
        // const {name, price, img} = this.state;
        axios.post('/api/product', {
            name: store.getState().name,
            price: store.getState().price,
            img: store.getState().img
        })
        .then(() => {
            this.resetInput();
        })
    }

    render() {
        return (
            <>
            <div>Form</div>
            <input type="text" id='input1' onChange={this.updateName}/>
            <input type="text" id='input2' onChange={this.updatePrice}/>
            <input type="text" id='input3' onChange={this.updateImg}/>
            <button onClick={this.resetInput}>Cancel</button>
            <button onClick={this.createProduct}>Add to Inventory</button>
            </>
        )
    }
}