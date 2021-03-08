import { applyMiddleware, 
         combineReducers, 
         compose, createStore } from 'redux';
import thunk                    from 'redux-thunk';
import { cartReducer }          from './reducers/cartReducers';
import { productListReducer, 
         productDetailsReducer,
         productSaveReducer }   from './reducers/productReducers';
import { userRegisterReducer, 
         userSigninReducer }    from './reducers/userReducers';

const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo')
          ? JSON.parse(localStorage.getItem('userInfo'))//to convert it to object
          : null,
      },
    cart: {
        cartItems: localStorage.getItem('cartItems') 
        ? JSON.parse(localStorage.getItem('cartItems')) : [],
    },
};
const reducer = combineReducers({
      productList: productListReducer,
      productDetails: productDetailsReducer,
      cart: cartReducer,
      userSignin: userSigninReducer,
      userRegister: userRegisterReducer,
      productSave: productSaveReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // to show redux store in redux devtools
const store = createStore(
    reducer, initialState, composeEnhancer(applyMiddleware(thunk))
    );

export default store;
