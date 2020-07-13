import { ADD_PRODUCT_BASKET } from '../actions/types';
const initialState = {
    basketNums: 0
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_PRODUCT_BASKET:
            return {
                basketNums: this.basketNums + 1
            }
        default:
            return state;
    }
}