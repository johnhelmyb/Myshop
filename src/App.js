import React                          from 'react';
import { useDispatch, useSelector }   from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ProductPage                    from './Page/ProductPage';
import ProductsPage                   from './Page/ProductsPage';
import HomePage                       from './Page/HomePage';
import CartPage                       from './Page/CartPage';
import SigninPage                     from './Page/SigninPage';
import Register                       from './Page/Register';
import Footer                         from './components/Footer';
import { signout }                    from './actions/userActions';
import conditiondeVente               from './footerPages/conditiondeVente';
import Login from './Page/Login';
import Profile from './Page/Profile';
import UpdateProfile from './Page/UpdateProfile';

function App() {

  const cart = useSelector((state) => state.cart); //access to redux store
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  }
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }
  
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="row">
      <div className="brand">
        <button className="burger" onClick={openMenu}>&#9776;</button>
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
              <Link to="Login">Se connecter</Link>
            )}
      </div>
    </header>
    <aside className="sidebar">
      <h3>Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>
          x
        </button>
          <ul className="categories">
            <li>
              <Link to="/category/Hoodies">Hoodies</Link>
            </li>

            <li>
              <Link to="/category/Shirts">Shirts</Link>
            </li>
          </ul>
    </aside>
    <main>
        <Route path="/" component={HomePage} exact></Route>
        <Route path="/cart/:id?" component={CartPage}></Route>
        <Route path="/category/:id" component={HomePage} />
        <Route exact path="/product/:id" component={ProductPage}></Route>
        <Route exact path="/products" component={ProductsPage}></Route>
        <Route path="/conditiondeVente" component={conditiondeVente}></Route>
    </main>
    <Footer />
  </div>
  </BrowserRouter>
  );
}

export default App;
