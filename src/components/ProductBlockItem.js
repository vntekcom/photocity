import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Parser from 'html-react-parser';

class ProductBlockItem extends Component {
    render() {
        let { product } = this.props;
        let productPrice = product.price > 0 ? product.price.toLocaleString() : '';
        let productSRP = product.srp > 0 ? product.srp.toLocaleString() : '';
        let priceElm = product.price > 0 ? `${productPrice}đ <span>${productSRP}đ</span>` : `${productSRP}đ`;
        return (
            <Fragment>
                <li className="wow slideInLeft" data-wow-delay="0.00s" style={{ visibility: 'visible', animationDelay: '0s', animationName: 'slideInLeft' }}>
                    <div className="p_container">

                        {/* <div className="option">
                            <i className="gift"><i className="fas fa-gift"></i> QUÀ TẶNG</i>
                            <i className="off">-11%</i>
                            <i className="icon_new">New</i>
                        </div> */}

                        <Link to={`/${product.category}/${product.slug}/${product._id}`} className="p-img">
                            <img data-sizes="auto" className="lazyload" src={product.image} alt={product.name} />
                        </Link>

                        <Link to={`/${product.category}/${product.slug}/${product._id}`} className="p-name" >
                            {product.name}
                        </Link>

                        <div className="text-warning text-15" >
                            {this.showRating(product.rating)}
                        </div>

                        <div className="p_price">
                            {Parser(priceElm)}
                        </div>

                    </div>
                </li>
            </Fragment>
        );
    }

    showRating = rating => {
        var result = [];
        for (var i = 1; i <= rating; i++) {
            result.push(<i className="fas fa-star" key={i}></i>);
        }
        for (var j = 1; j <= (5 - rating); j++) {
            result.push(<i className="far fa-star" key={i + j}></i>);
        }
        return result;
    }
}

export default ProductBlockItem;