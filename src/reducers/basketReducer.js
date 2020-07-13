import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET} from '../actions/types';
const initialState = {
    basketNums: 0
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_PRODUCT_BASKET:
            return {
                basketNums: state.basketNums + 1
            }
        case GET_NUMBERS_BASKET:
            return {
                ...state
            }
        default:
            return state;
    }
}