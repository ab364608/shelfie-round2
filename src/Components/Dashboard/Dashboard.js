import React, {Component} from 'react';

//Components

import Product from '../Product/Product';

export default class Dashboard extends Component {
    constructor() {
        super();

        this.state = {

        }
    }
    render() {
        const {inventoryList} = this.props;
        console.log(inventoryList)
       
        const myInventory = inventoryList.map((val, i) => {
            console.log(val)
            return (
                <Product 
                key={i}
                product={val}
                inventory={inventoryList}
                />
            
            )
        })

        return (
            <div>
                <div>Dashboard</div>
                {myInventory}
            </div>

        )
    }
}