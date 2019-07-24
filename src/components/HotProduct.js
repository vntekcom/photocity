import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ProductItem from './ProductBlockItem';

class HotProduct extends Component {
    render() {
        let { products } = this.props;
        return (
            <div className="container-fluid top-product-home product-list">
                <div className="box fr">
                    <span className="label">
                    <i class="fab fa-hotjar fa-2x"></i>
                    </span>
                    <div className="title robot">
                        <span>Sản phẩm bán chạy</span>
                    </div>
                    <div className="row">
                        <div className="flexslider wait-product-list col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <div className="flex-viewport">
                                <ul className="list slides">
                                    {this.showProducts(products)}
                                </ul>
                            </div>
                        </div>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
                            <div className="banner-img">
                                <Link to="/#" target="_self">
                                    <img src="./img/banner/banner_300x600_2.jpg" alt="banner_300x600" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    showProducts(products) {
        var result = null;
        result = products
            .filter(product => product.isHot)
            .slice(0, 8)
            .map((product, index) => {
                return <ProductItem
                    key={index}
                    product={product}
                    index={index}
                />
            })
        return result;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        products: state.products
    }
}
export default connect(mapStateToProps, null)(HotProduct);
