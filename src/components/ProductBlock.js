import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import ProductBlockItem from './ProductBlockItem';

class ProductBlock extends Component {
    render() {
        let { category, productCount, products, menus } = this.props;
        return (
            <Fragment>
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
                            <ul className="list" style={{ paddingLeft: '25px' }}>
                                {this.showProducts(category, products)}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="clear space10px" />
            </Fragment>
        );
    }

    showProducts = (category, products) => {
        var result = null;
        result = products
            .filter(product => product.category.indexOf(category.toLowerCase()) !== -1)
            .slice(0, 10)
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
            .filter(menu => menu.label.toLowerCase() === category.toLowerCase())
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

export default ProductBlock;