import { combineReducers } from 'redux';
import menus from './menus';
import products from './products';
import cart from './cart';

const appReducers = combineReducers({
    menus,
    products,
    cart   
})

export default appReducers;