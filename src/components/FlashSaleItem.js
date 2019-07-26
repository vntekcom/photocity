import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Parser from 'html-react-parser';

class FlashSaleItem extends Component {
    render() {
        let { product } = this.props;
        let productPrice = product.price > 0 ? product.price.toLocaleString() : '';
        let productSRP = product.srp > 0 ? product.srp.toLocaleString() : '';
        let priceElm = product.price > 0 ? `${productPrice}đ <span>${productSRP}đ</span>` : `${productSRP}đ`;
        let productDiscount = (product.srp - product.price).toLocaleString();
        return (
            <div className="col-md-2 col-sm-2 col-xs-2">
                <Link to={`${product.category}/${product.slug}/${product.id}`} className="p-img">
                    <img
                        src={product.image}
                        alt={product.name}
                    />
                </Link>
                <span className="FF9800">Tiết kiệm: </span>
                <strong className="text-warning">{productDiscount}đ</strong>
                <Link to="/" className="p-name" >
                    {product.name}
                </Link>
                <div className="text-warning text-15" >
                    {this.showRating(product.rating)}
                </div>
                <div className="p_price">
                    {Parser(priceElm)}
                </div>
            </div>
        );
    }

    showRating = rating => {
        var result = [];
        for (var i = 1; i <= rating; i++) {
            result.push(<i className="fas fa-star"></i>);
        }
        for (var j = 1; j <= (5 - rating); j++) {
            result.push(<i className="far fa-star"></i>);
        }
        return result;
    }
}

export default FlashSaleItem;