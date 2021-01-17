import axios from "axios";
import { PRODUCT_LIST_FAIL, 
         PRODUCT_LIST_REQUEST,
         PRODUCT_LIST_SECCESS } from "../constants/productConstants";

export const listProducts = () => async (dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST
    });
    try{
        const { data } = await axios.get('api/products'); // send ajax request to get list of products
        dispatch({type: PRODUCT_LIST_SECCESS, payload: data });
    }catch(error){
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
    }
}