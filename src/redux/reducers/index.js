import { combineReducers } from 'redux';

import auth from './auth';
import card from './card';
import products from './products';

export default combineReducers({ 
  auth,
  card,
  products,
});
