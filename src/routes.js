import React from 'react';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import FavoritePage from './pages/FavoritePage';
import ProductListPage from './pages/ProductListPage';
import ProductItemPage from './pages/ProductItemPage';
import CartPage from './pages/CartPage';
import DeliveryPage from './pages/DeliveryPage';
import PaymentPage from './pages/PaymentPage';
import WarrantyPage from './pages/WarrantyPage';
import ReturnPage from './pages/ReturnPage';
import NotFoundPage from './pages/NotFoundPage';

const routes = [
    {
        path:'/',
        exact: true,
        main: ({match}) => <HomePage match={match} />
    },
    {
        path:'/cart',
        exact: true,
        main: ({match}) => <CartPage match={match} />
    },
    {
        path:'/giao-hang',
        exact: true,
        main: ({match}) => <DeliveryPage match={match} />
    },
    {
        path:'/thanh-toan',
        exact: true,
        main: ({match}) => <PaymentPage match={match} />
    },
    {
        path:'/bao-hanh',
        exact: true,
        main: ({match}) => <WarrantyPage match={match} />
    },
    {
        path:'/tra-hang',
        exact: true,
        main: ({match}) => <ReturnPage match={match} />
    },
    {
        path:'/:category',
        exact: true,
        main: ({match}) => <ProductListPage match={match} />
    },
    {
        path:'/user/login',
        exact: true,
        main: ({match}) => <LoginPage match={match} />
    },
    {
        path:'/user/favorite',
        exact: true,
        main: ({match}) => <FavoritePage match={match} />
    },
    {
        path:'/:category/:product/:id',
        exact: true,
        main: ({match}) => <ProductItemPage match={match} />
    },

    {
        path:'',
        exact: false,
        main: () => <NotFoundPage />
    }    
]

export default routes;