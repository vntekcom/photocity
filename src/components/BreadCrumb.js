import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class BreadCrumb extends Component {
    render() {
        let { category } = this.props;
        return (
            <Fragment>
                <div id="breadcrumb">
                    <Link to="/" className="nopad-l">Trang chủ</Link> 
                    <Link to={`/${category}`} className="text-capitalize"> &gt; {category}</Link>
                </div>
            </Fragment>
        );
    }
}

export default BreadCrumb;
