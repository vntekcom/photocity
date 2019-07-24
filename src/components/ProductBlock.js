import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ProductBlockItem from './ProductBlockItem';

class ProductBlock extends Component {
    render() {
        let { category, productCount, products, menus } = this.props;
        console.log()
        return (
            <div className="floor">
                <div className="title-product-list">
                    <span className="more">
                        <a href="/#">{category} ({productCount})</a>
                    </span>
                    <div className="sub-cate-list">
                        {this.showMenus(category, menus)}
                    </div>

                </div>

                <div className="full">
                    <div className="product-list home">
                        <ul className="list">
                            {this.showProducts(category, products)}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

    showProducts = (category, products) => {
        var result = null;
        result = products
            .filter(product => product.category === category.toLowerCase())
            .map((product, index) => {
                return <ProductBlockItem
                    key={index}
                    product={product}
                    index={index}
                />
            })
        return result;
    }

    showMenus = (category, menus) => {
        var subMenu = null;
        menus
            .filter(menu => menu.label.toLowerCase()===category.toLowerCase())
            .map(menu => {
                subMenu = menu.subCategory.map((sub, index) => {
                    return (
                        <h3 key={index}>
                            <Link to={sub.to}>{sub.label}</Link>
                        </h3>
                    )
                });
                return subMenu;
            })
        return subMenu;
    }
}

const mapStateToProps = state => {
    return {
        products: state.products,
        menus: state.menus
    }
}

export default connect(mapStateToProps, null)(ProductBlock);