import React from 'react'
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import data from '../data';

export default function ProductPage (props) {
    const product = data.products.find((x) => x._id === props.match.params.id);
    if(!product){
        return <div>Article non trouvé</div>
    }
    return (
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
                                <div>Article :</div>
                                <div>
                                    { product.countInStock > 0 ? ( <span className="success">En Stock</span>
                                    ) : ( <span className="error"> Indisponible </span>
                                    )}
                                </div>
                            </div>
                        </li>
                        <li><button className="primary">Ajouter au panier</button></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

