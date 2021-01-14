import React from 'react';
import { Link } from 'react-router-dom'; 
import data from './data';

function App() {
  return (
    <div classNameName="grid-container">
    <header className="row">
      <div>
        <Link className="brand" to="/">MyShop</Link>
      </div>
      <div>
        <Link to="/cart">Panier</Link>
        <Link to="/signin">Se connecter</Link>
      </div>
    </header>
    <main>
      <div>
        <div className="row center">
          {data.products.map((product) => (
             <div key={product._id} className="card">
               <Link to={`/product/${product._id}`}>
               <img className="medium" src={product.image} alt={product.name} />
               </Link>
            <div className="card-body">
                <Link to="product.html"><h2>{product.name}</h2></Link>
              <div className="rating">
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
              </div>
              <div className="price">€{product.price}</div>
            </div>
            </div>
           ))}
        </div>
      </div>
    </main>
    <footer className="row center">Conditions generals</footer>
  </div>
  );
}

export default App;
