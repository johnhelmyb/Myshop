import React from 'react';
import { Link } from 'react-router-dom'; 
//import Product from './components/product';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductPage from './Page/ProductPage';
import HomePage from './Page/HomePage';

function App() {
  return (
    <BrowserRouter>
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
    <nav className="row1">
    <div>
        <Link className="catalogue" to="/">Catalogue</Link>
      </div>
      <div><Link to="/t-shirt">T-Shirts</Link></div>
      <div><Link to="/sweatshirts">Sweatshirts</Link></div>
      <div><Link to="/hoodies">Hoodies</Link></div>
      <div><Link to="/signup">S'inscrire</Link></div>
      </nav>
    <main>
    <Route path="/product/:id" component={ProductPage}></Route>
    <Route path="/" component={HomePage} exact></Route>
    </main>

    <footer className="row center">Conditions generales</footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
