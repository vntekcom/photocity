import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ListSort from './ListSort';
import ProductListItem from './ProductListItem';

class ProductList extends Component {
    render() {
        let { products, category } = this.props;
        return (
            <div id="content">
                <ListSort />
                <div className="product-list page">
                    <ul className="list">
                        {this.showProducts(category, products)}
                    </ul>
                </div>
                <div className="clear space10px" />
                {/* Navigation Menu */}
                <div className="top_area_list_page">
                    <div className="paging">
                        <ul className="pagination">
                            <li>
                                <Link to="" className="current">1</Link>
                            </li>
                            <li>
                                <Link to="/">2</Link>
                            </li>
                            <li>
                                <Link to="/">3</Link>
                            </li>
                            <li>
                                <Link to="/">4</Link>
                            </li>
                            <li>
                                <Link to="/">5</Link>
                            </li>
                            <li>
                                <Link to="/">Next</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

    showProducts(category, products) {
        var result = null;
        result = products
            .filter(product => product.category === category)
            .map((product, index) => {
                return <ProductListItem
                    key={index}
                    product={product}
                    index={index}
                />
            })
        return result;
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, null)(ProductList);