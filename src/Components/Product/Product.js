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
                <h4>Price: {price}</h4>
                <img src={img} alt='img'/>
                <div>
                    <button onClick={() => this.props.deleteProduct(this.props.product.id)}>Delete</button>
                </div>
            </div>
        )
    }
}