import { GET_NUMBERS_BASKET } from './types';

export const getNumbers = () => {
    return (dispatch) => {
        console.log('Receiving all basket numbers');
        dispatch({
            type: GET_NUMBERS_BASKET
        });
    }
}