import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../components/product';

export default  function HomePage() {
    const [products, setProduct] = useState([]);
    useEffect(() => {
       const fetchdata = async () => {
           const { data } = await axios.get('/api/products');
           setProduct(data);
       };
        fetchdata();
    }, []);
    return(
        <div>
            <div className="row center">
                {products.map((product) => (
                    <Product key={product._id} product={product}></Product>
                ))}
            </div>
        </div>
    )
}
