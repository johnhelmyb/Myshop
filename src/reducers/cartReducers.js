import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            //get item to add to cart
            const item = action.payload;
            //if i have already item in cart after commpaire it
            const existItem = state.cartItems.find((x) => x.product === item.product);
            if (existItem) {
                return { 
                    //not change but update
                    ...state, 
                    cartItems: state.cartItems.map((x) => //compaire with exist item and return it
                    x.product === existItem.product ? item : x
                    ),
                };
            } else {
                return { ...state, cartItems: [...state.cartItems, item] };//if item is new add it
            }
            case CART_REMOVE_ITEM:
                return {
                    ...state,
                    cartItems: state.cartItems.filter((x) => x.product !== action.payload),// to remove th e product item in action.payload
                };
        default:
            return state;
    }
};
