import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FlashSaleItem extends Component {
    render() {
        let { product } = this.props;
        let productPrice = product.price > 0 ? product.price.toLocaleString() : '';
        let productSRP = product.srp > 0 ? product.srp.toLocaleString() : '';
        let productDiscount = (product.srp - product.price).toLocaleString();
        return (
            <div className="col-md-3 col-sm-3 col-xs-3">
                <Link to={`${product.category}/${product.slug}/${product.id}`} className="p-img">
                    <img
                        src={product.image}
                        alt={product.name}
                    />
                </Link>
                <strong className="FF9800">Giảm: {productDiscount}</strong>
                <Link to="/" className="p-name" >
                    {product.name}
                </Link>
                <div className="p_price">
                    {productPrice} <span>{productSRP}</span>
                </div>
            </div>
        );
    }
}

export default FlashSaleItem;