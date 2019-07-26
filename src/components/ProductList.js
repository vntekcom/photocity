import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListSort from './ListSort';

class ProductList extends Component {
    render() {
        return (
            <div id="content">
                <ListSort />
                <div className="product-list page">
                    <ul className="list">
                        {this.props.children}
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
}

export default ProductList;