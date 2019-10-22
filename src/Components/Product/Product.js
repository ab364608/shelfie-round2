import React, {Component} from 'react';

export default class Product extends Component {
    constructor() {
        super();

        this.state = {

        }
    }
    render() {
        const {name, price, img} = this.props.product;
        return (
            <div>
                <h3>Product: {name}</h3>
                <h4>Name: {price}</h4>
                <img src={img} alt='img'/>
            </div>
        )
    }
}