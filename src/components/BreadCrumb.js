import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class BreadCrumb extends Component {
    render() {
        let { category, isShowTitle } = this.props;
        let classElm = isShowTitle ? '' : 'd-none';

        return (
            <Fragment>
                <div id="breadcrumb">
                    <Link to="/" className="nopad-l">Trang chủ</Link> 
                    <Link to={`/${category}`} className="text-capitalize"> &gt; {category}</Link>
                </div>
                <div className={`clear category-name text-fff text-right txt_u ${classElm}`}>
                    <h1>{category}</h1>
                </div>
            </Fragment>
        );
    }
}

export default BreadCrumb;
