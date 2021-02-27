import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
import MessageBox from '../components/MessageBox';

export default function CartPage(props) {
    const productId = props.match.params.id;
    const qty = props.location.search 
    ? Number(props.location.search.split('=')[1]) 
    : 1;
    //to get cart from redux store
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const dispatch = useDispatch();
    // for to check if is item exesit /for to use it one time i used useEffect
    useEffect(() => {
        if(productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);

    //for delete item
    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    };
    
    const checkoutHandler = () => {
        props.history.push('/signin?redirect=shipping');
    }
    return (
        <div className="row top">
            <div className="col-2">
                <h1>Panier</h1>
                {cartItems.length === 0 ? (
                <MessageBox>
                    Panier vide <Link to="/">Accueil</Link>
                </MessageBox> 
                ) : (
                    // show cart items
                    <ul>
                        {cartItems.map((item) => (
                                <li key={item.product}>
                                    <div className="row">
                                        <div>
                                        <img src={item.image} 
                                        alt={item.name} className="small"></img>
                                        </div>
                                        <div className="min-30">
                                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                                        </div>
                                        <div>
                                            <select 
                                                value={item.qty} 
                                                onChange={(e) => 
                                                    dispatch(
                                                    addToCart(item.product, Number(e.target.value))// select box
                                                    )
                                                }
                                            >
                                                    {[...Array(item.countInStock).keys()].map((x) => (
                                                    <option key={x + 1} value={x + 1}>
                                                        {x + 1}
                                                        </option>
                                                        ))}
                                                </select>
                                        </div>
                                    <div>€{item.price}</div>
                                    <div>
                                        <button type="button"
                                                onClick={() => removeFromCartHandler(item.product)}
                                        >
                                            Effacer
                                        </button>
                                    </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                )}
            </div>
            <div className="col-1">
                <div className="card card-body">
                    <ul>
                        <li> 
                            <h2>Total ({cartItems.reduce((a, c) => a + c.qty, 0)} Articles ) : €
                            {cartItems.reduce((a, c) => a + c.price * c.qty, 0)} 
                            </h2> 
                        </li>
                        <li>
                            <button 
                            type="button" 
                            onClick={checkoutHandler} 
                            className="primary block" 
                            disabled={cartItems.length === 0}
                            >
                                Valider
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
