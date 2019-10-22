import {createStore} from 'redux';

const initialState = {
    inventoryList: []
}

const INVENTORY_LIST = 'INVENTORY_LIST';

function reducer(state = initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case INVENTORY_LIST:
            return {
                ...state,
                inventoryList: payload
            }

        default: return state;
    }
}

export default createStore(reducer);