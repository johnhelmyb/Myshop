const data = {
  users: [
    {
      name: 'Johny',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
      {
        _id: '1',
        name: 'T-Shirt',
        category: 'T-Shirt',
        image: '/images/indy.png',
        price: 26,
        countInStock: 6,
        brand: 'Vaco',
        rating: 4.5,
        numReviews: 10,
        description: 'Meilleure qualité de coton',
      },
      { 
        _id: '2',
        name: 'Hoodie',
        category: 'Hoodie',
        image: '/images/forty.png',
        price: 39,
        countInStock: 0,
        brand: 'Turing',
        rating: 4.2,
        numReviews: 5,
        description: 'Meilleure qualité de coton',
      },
      {
        _id: '3',
        name: 'Sweatshirt',
        category: 'T-Shirt',
        image: '/images/830.png',
        price: 70,
        countInStock: 9,
        brand: ' Strok',
        rating: 4.5,
        numReviews: 8,
        description: 'Meilleure qualité de coton',
      }, 
      {
        _id: '4',
        name: 'T-Shirt',
        category: 'T-Shirt',
        image: '/images/bars.png',
        price: 26,
        countInStock: 6,
        brand: 'Cube',
        rating: 4.5,
        numReviews: 8,
        description: 'Meilleure qualité de coton',
      },
      {
        _id: '5',
        name: 'Dimand',
        category: 'T-Shirt',
        image: '/images/dimand.png',
        price: 26,
        countInStock: 6,
        brand: 'Cube',
        rating: 4.5,
        numReviews: 8,
        description: 'Meilleure qualité de coton',
      },
      {
        _id: '6',
        name: 'T-Shirt',
        category: 'T-Shirt',
        image: '/images/majisty500.png',
        price: 29,
        countInStock: 6,
        brand: 'Cube',
        rating: 4.5,
        numReviews: 8,
        description: 'Meilleure qualité de coton',
      },
      {
        _id: '7',
        name: 'T-Shirt',
        category: 'T-Shirt',
        image: '/images/faro.png',
        price: 46,
        countInStock: 6,
        brand: 'Cube',
        rating: 4.5,
        numReviews: 8,
        description: 'Meilleure qualité de coton',
      },
      {
        _id: '8',
        name: 'T-Shirt',
        category: 'T-Shirt',
        image: '/images/fire.png',
        price: 26,
        countInStock: 6,
        brand: 'Cube',
        rating: 4.5,
        numReviews: 8,
        description: 'Meilleure qualité de coton',
      },
    ],
  };
  export default data;
