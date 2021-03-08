import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch }   from 'react-redux';

import {
  saveProduct,
} from '../actions/productActions';

export default function ProductsScreen(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const [numReviews, setNumReviews ]= useState('');
  const [uploading] = useState(false);
  const productList = useSelector((state) => state.productList);
  const { loadingSave, products, errorSave } = productList;
  const dispatch = useDispatch();


  useEffect(() => {
      return () => {

      }
  },[]);

  
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveProduct({
        _id: id,
        name,
        price,
        image,
        brand,
        category,
        countInStock,
        description,
        rating, numReviews
      })
    );
  };


  return (
    <div className="content content-margined">
      <div className="product-header">
        <h3>Produits</h3>
        <button className="button primary" onClick={() => ({})}>
          Créer un article
        </button>
      </div>
      {modalVisible && (
        <div className="form">
          <form onSubmit={submitHandler}>
            <ul className="form-container">
              <li>
                <h2>Créer un article</h2>
              </li>
              <li>
                {loadingSave && <div>Loading...</div>}
                {errorSave && <div>{errorSave}</div>}
              </li>

              <li>
                <label htmlFor="name">ID</label>
                <input
                  type="_id"
                  name="id"
                  value={id}
                  id="id"
                  onChange={(e) => setId(e.target.value)}
                ></input>
              </li>

              <li>
                <label htmlFor="name">Nom</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </li>
              <li>
                <label htmlFor="price">Prix</label>
                <input
                  type="text"
                  name="price"
                  value={price}
                  id="price"
                  onChange={(e) => setPrice(e.target.value)}
                ></input>
              </li>
              <li>
                <label htmlFor="image">Image</label>
                <input
                  type="text"
                  name="image"
                  value={image}
                  id="image"
                  onChange={(e) => setImage(e.target.value)}
                ></input>
                <input type="file" ></input>
                {uploading && <div>Uploading...</div>}
              </li>
              <li>
                <label htmlFor="brand">Brand</label>
                <input
                  type="text"
                  name="brand"
                  value={brand}
                  id="brand"
                  onChange={(e) => setBrand(e.target.value)}
                ></input>
              </li>
              <li>
                <label htmlFor="countInStock">CountInStock</label>
                <input
                  type="text"
                  name="countInStock"
                  value={countInStock}
                  id="countInStock"
                  onChange={(e) => setCountInStock(e.target.value)}
                ></input>
              </li>
              <li>
                <label htmlFor="name">Categorie</label>
                <input
                  type="text"
                  name="category"
                  value={category}
                  id="category"
                  onChange={(e) => setCategory(e.target.value)}
                ></input>
              </li>
              <li>
                <label htmlFor="description">Déscription</label>
                <textarea
                  name="description"
                  value={description}
                  id="description"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </li>
              <li>
                <label htmlFor="rating">Rating</label>
                <textarea
                  type="text"
                  name="rating"
                  value={rating}
                  id="rating"
                  onChange={(e) => setRating(e.target.value)}
                ></textarea>
              </li>
              <li>
                <label htmlFor="numreviews">NumReviews</label>
                <textarea
                  type="text"
                  name="numreviews"
                  value={numReviews}
                  id="numreviews"
                  onChange={(e) => setNumReviews(e.target.value)}
                ></textarea>
              </li>
              <li>
                <button type="submit" className="button primary">
                  {id ? 'Update' : 'Create'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setModalVisible(false)}
                  className="button secondary"
                >
                  Retour
                </button>
              </li>
            </ul>
          </form>
        </div>
      )}

      <div className="product-list">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Brand</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.brand}</td>
                <td>
                  <button className="button" onClick={() => (product)}>
                    Modifier
                  </button>{' '}
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
