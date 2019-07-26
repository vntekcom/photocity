import React from 'react';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import FavoritePage from './pages/FavoritePage';
import ProductListPage from './pages/ProductListPage';
import ProductItemPage from './pages/ProductItemPage';
import NotFoundPage from './pages/NotFoundPage';

const routes = [
    {
        path:'/',
        exact: true,
        main: ({match}) => <HomePage match={match} />
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
        path:'/:category',
        exact: true,
        main: ({match}) => <ProductListPage match={match} />
    },
    {
        path:`/:category/:product/:id`,
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