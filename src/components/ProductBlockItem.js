import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class ProductBlockItem extends Component {
    render() {
        let { product } = this.props;
        let productPrice = product.price > 0 ? product.price.toLocaleString() : '';
        let productSRP = product.srp > 0 ? product.srp.toLocaleString() : '';
        return (
            <Fragment>
                <li className="wow slideInLeft" data-wow-delay="0.00s" style={{ visibility: 'visible', animationDelay: '0s', animationName: 'slideInLeft' }}>
                    <div className="p_container">

                        <div className="option">
                            {/* <i className="gift"><i className="fas fa-gift"></i> QUÀ TẶNG</i>
                            <i className="off">-11%</i>
                            <i className="icon_new">New</i> */}
                        </div>

                        <Link to={`/${product.category}/${product.slug}/${product.id}`} className="p-img">
                            <img data-sizes="auto" className="lazyload" src={product.image} alt={product.name} />
                        </Link>

                        <Link to={`/${product.category}/${product.slug}/${product.id}`} className="p-name" >
                            {product.name}
                        </Link>

                        <div className="text-warning text-20" >
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                            <i className="far fa-star"></i>
                        </div>

                        <div className="p_price">
                            {productPrice} <span>{productSRP}</span>
                        </div>
                    </div>
                </li>
            </Fragment>
        );
    }
}

export default ProductBlockItem;