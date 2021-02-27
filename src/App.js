import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ProductPage from './Page/ProductPage';
import HomePage from './Page/HomePage';
import CartPage from './Page/CartPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login';
import Register from './components/register';

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
        <Link to="/login">Se connecter</Link>
        <Link to="/register">S'inscrire</Link>
      </div>
    </header>
    <main>
        <Route path="/" component={HomePage} exact></Route>
        <Route path="/cart/:id?" component={CartPage}></Route>
        <Route exact path="/product/:id" component={ProductPage}></Route>
        <Route exact path ="/login" component={Login}></Route>
        <Route exact path ="/register" component={Register}></Route>
    </main>
    <footer> 
      
    </footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
