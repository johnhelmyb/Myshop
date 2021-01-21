import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ProductPage from './Page/ProductPage';
import HomePage from './Page/HomePage';
import CartPage from './Page/CartPage';

function App() {
  const cart = useSelector((state) => state.cart); /*access to redux store*/
  const { cartItems } = cart;
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="row">
      <div>
        <Link className="brand" to="/">MyShop</Link>
      </div>
      <div>
        <Link to="/cart">Panier{cartItems.length > 0 && (
        <span className="badge">{cartItems.length}</span>
          )}
          </Link>
        <Link to="/signin">Se connecter</Link>
      </div>
    </header>
    <main>
    <Route path="/cart/:id?" component={CartPage}></Route>
    <Route path="/product/:id" component={ProductPage}></Route>
    <Route path="/" component={HomePage} exact></Route>
    </main>
    <footer className="row center">Conditions generales</footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
