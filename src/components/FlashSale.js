import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlashSaleItem from './FlashSaleItem';

class FlashSale extends Component {
    render() {
        let { products } = this.props;
        return (
            <div className="top-product-home product-list">
                <div className="flash-sale box fr">
                    <span className="label">
                        <i class="fas fa-bolt fa-2x"></i>
                    </span>
                    <div className="title robot">
                        <span>Flash sale</span>
                    </div>

                    <div className="wait-product-list">
                        {this.showProducts(products)}
                        {/* <FlashSaleItem /> */}

                    </div>
                </div>
            </div>
        );
    }

    showProducts = (products) => {
        let result = null;
        result = products
            .filter(product => product.isFlashsale)
            .slice(0, 8)
            .map((product, index) => {
                return <FlashSaleItem product={product} key={index} />
            })
        return result;
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}
export default connect(mapStateToProps)(FlashSale);