import React, { Component, Fragment } from 'react';
// import { Link } from 'react-router-dom';

class ProductList extends Component {
    render() {
        return (
            <Fragment>
                <div className="product-list home">
                    <ul>
                        {this.props.children}
                    </ul>
                </div>

                <div className="clear space10px" />

                {/* Navigation Menu */}
                {/* <div className="top_area_list_page">
                    <div className="paging">
                        <ul className="pagination">
                            <li>
                                <Link to="#" className="current">1</Link>
                            </li>
                            <li>
                                <Link to="#">2</Link>
                            </li>
                            <li>
                                <Link to="#">3</Link>
                            </li>
                            <li>
                                <Link to="#">4</Link>
                            </li>
                            <li>
                                <Link to="#">5</Link>
                            </li>
                            <li>
                                <Link to="/">Next</Link>
                            </li>
                        </ul>
                    </div>
                </div> */}

            </Fragment>
        );
    }
}

export default ProductList;