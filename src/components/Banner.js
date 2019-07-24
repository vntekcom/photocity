import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Banner extends Component {
    render() {
        return (
            <header className="header container">
                <div className="container">

                    <Link to="/" id="logo">
                        <div className="format inline-block">
                            <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="Photocity" />
                        </div>
                    </Link>

                    <div id="search">
                        <form name="searchForm">
                            <div className="ui search">
                                <div className="ui icon input">
                                    <input className="prompt" name="txtSearch" type="text" placeholder="Tìm kiếm..." />
                                </div>
                            </div>
                        </form>
                    </div>

                    <div id="cart_top">
                        <i className="fas fa-shopping-cart" />
                        <Link to="/cart">
                            <div className="cart_text">
                                <span id="count_shopping_cart_store">0</span>
                            </div>
                        </Link>
                    </div>

                </div>
            </header>
        );
    }
}

export default Banner;