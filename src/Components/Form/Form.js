import React, {Component} from 'react';

export default class Form extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            price: 0,
            img: ''
        }
    }

    updateName = e => {
        this.setState({name: e.target.value})
    }

    updatePrice = e => {
        this.setState({price: e.target.value})
    }

    updateImg = e => {
        this.setState({img: e.target.value})
    }

    resetInput = () => {
        document.getElementById("input1").value = "";
        document.getElementById("input2").value = "";
        document.getElementById("input3").value = "";
    }

    render() {
        return (
            <>
            <div>Form</div>
            <input type="text" id='input1' onChange={this.updateName}/>
            <input type="text" id='input2' onChange={this.updatePrice}/>
            <input type="text" id='input3' onChange={this.updateImg}/>
            <button onClick={this.resetInput}>Cancel</button>
            <button>Add to Inventory</button>
            </>
        )
    }
}