import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ProductPage from './Page/ProductPage';
import HomePage from './Page/HomePage';
import CartPage from './Page/CartPage';
import SigninPage from './Page/SigninPage';
import Register from './Page/Register';
import Footer from './components/Footer';
import { signout } from './actions/userActions';
import conditionGdeVente from './footerPages/conditionGdeVente';

function App() {
  const cart = useSelector((state) => state.cart); /*access to redux store*/
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler =() => {
    dispatch(signout());
  }
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="row">
      <div className="brand">
        <button className="burger" onClick="openMenu">&#9776;</button>
        <Link className="brand" to="/">MyShop</Link>
      </div>
      <div>
        <Link to="/cart">Panier{cartItems.length > 0 && (
        <span className="badge">{cartItems.length}</span>
          )}
          </Link>
          {userInfo ? (
              <div className="dropdown">
              <Link to="#">
                {userInfo.name}<i className="fa fa-caret-down"></i>{' '}
                </Link>
              <ul className="dropdown-content">
                <Link to="#signout" onClick={signoutHandler}>
                  Se deconnecter</Link>
              </ul>
              </div>
            ) : (
              <Link to="signinpage">Se connecter</Link>
            )}
      </div>
    </header>
    <main>
        <Route path="/" component={HomePage} exact></Route>
        <Route path="/cart/:id?" component={CartPage}></Route>
        <Route exact path="/product/:id" component={ProductPage}></Route>
        <Route exact path ="/signinpage" component={SigninPage}></Route>
        <Route exact path ="/register" component={Register}></Route>
        <Route path="/footerPages/conditionGdeVente" component={conditionGdeVente}></Route>
    </main>
    <Footer />
  </div>
  </BrowserRouter>
  );
}

export default App;
