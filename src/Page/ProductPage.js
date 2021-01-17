import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from '../components/Rating';

export default function ProductPage (props) {
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const [qty, setQty] = useState(1);
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        dispatch(detailsProduct(productId));
    }, [dispatch, productId]);
    const addToCarteHandler = () => {
        props.history.push(`/cart/${productId} ?qty={qty}`);
    }
    return (
        <div>
        {loading ? <LoadingBox></LoadingBox> : error ? (  
        <MessageBox variant="danger">{error}</MessageBox> ) : ( 
            <div>
            <Link to="/">Retour</Link>
            <div className="row">
                <div className="col-2">
                    <img className="larg" src={product.image} alt={product.name}></img>
                </div>
                <div className="col-1">
                <ul>
                    <li>
                        <h1>{product.name}</h1>
                    </li>
                    <li><Rating rating={product.rating} numReviews={product.numReviews}></Rating></li>
                    <li>Prix: €{product.price}</li>
                    <li>Détails: <p>{product.description}</p></li>
                </ul>
                </div>
                <div className="col-1"></div>
                <div className="card card-body">
                    <ul>
                        <li>
                            <div className="row">
                                <div>Prix</div>
                                <div className="price">€{product.price}</div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div>Article </div>
                                <div>
                                    { product.countInStock > 0 ? ( <span className="success">En Stock</span>
                                    ) : ( <span className="error"> Indisponible </span>
                                    )}
                                </div>
                            </div>
                            { product.countInStock > 0 && (
                                <>
                                <li><div className="row"></div>
                                    <div>Qts</div>
                                    <div>
                                        <select value={qty} onChange={e => setQty(e.target.value)}>
                                            {[...Array(product.countInStock).keys()].map(
                                                (x) => (<option value={x+1}>{x+1}</option>)
                                            )}
                                        </select>
                                    </div>
                                </li>
                                <li><button onClick={addToCarteHandler} className="primary">Ajouter au panier</button></li>
                                </>
                            )}
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
        )}
    </div>

    );
}

