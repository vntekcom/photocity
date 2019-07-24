import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ProductItem from './ProductItem';

class NewProduct extends Component {
    render() {
        let { products } = this.props;
        return (
            <div className="container-fluid top-product-home product-list">
                <div className="box fl">
                    <span className="label">new</span>
                    <div className="title robot">
                        <span>Sản phẩm mới</span>
                    </div>

                    <div className="row">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
                            <div className="banner-img">
                                <Link to="/#" target="_self">
                                    <img src="./img/banner/banner_300x600.jpg" alt="banner_300x600" width="" />
                                </Link>
                            </div>
                        </div>

                        <div className="flexslider new-product-list col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <div className="flex-viewport" >
                                <ul className="list slides" >
                                    {this.showProducts(products)}
                                </ul>
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
            .filter(product => product.isNew)
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
export default connect(mapStateToProps, null)(NewProduct);