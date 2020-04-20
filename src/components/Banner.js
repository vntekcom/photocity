import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Banner extends Component {
    render() {
        let { cart } = this.props;
        return (
            <header className="header container-fluid">
                <div className="row">
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 text-center">
                        <Link to="/" >
                            <div className="format inline-block">
                                <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="Photocity" width="80"/>
                            </div>
                        </Link>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-center" id="search">
                        <form name="searchForm">
                            <div className="ui search">
                                <div className="ui icon input">
                                    <input className="prompt" name="txtSearch" type="text" placeholder="Tìm kiếm..." />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" id="cart_top">
                        <i className="fas fa-shopping-cart" />
                        <Link to="/cart">
                            <div className="cart_text">
                                <span id="count_shopping_cart_store">
                                    {this.showTotalProcuct(cart)}
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </header>
        );
    }

    showTotalProcuct = cart => {
        let total = 0;
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                total += cart[i].quantity;
            }
        }
        return total;
    }
}

export default Banner;