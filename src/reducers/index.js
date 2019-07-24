import { combineReducers } from 'redux';
import products from './products';
import menus from './menus';

const appReducers = combineReducers({
    products,
    menus
})

export default appReducers;