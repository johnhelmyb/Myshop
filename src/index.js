import React        from 'react';
import { Provider } from 'react-redux';
import ReactDOM     from 'react-dom';
import App          from './App';
import store        from './store';
import axios        from 'axios';
import './index.css';


axios.defaults.baseURL = 'http://localhost:3001';

ReactDOM.render(
  
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

