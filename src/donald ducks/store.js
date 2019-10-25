import {createStore} from 'redux';

const initialState = {
    inventoryList: [],
    name: '',
    price: 0,
    img: ''
}

export const INVENTORY_LIST = 'INVENTORY_LIST';
export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_PRICE = 'UPDATE_PRICE';
export const UPDATE_IMG = 'UPDATE_IMG';

function reducer(state = initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case INVENTORY_LIST:
            return {
                ...state,
                inventoryList: payload
            }
        case UPDATE_NAME:
            return {
                ...state,
                name: payload
            }
        case UPDATE_PRICE:
            return {
                ...state,
                price: payload
            }
        case UPDATE_IMG:
            return {
                ...state,
                img: payload
            }

        default: return state;
    }
}

export default createStore(reducer);