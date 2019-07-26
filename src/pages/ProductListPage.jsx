import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actFetchProductsRequest } from '../actions';
// IMPORT COMPONENTS
import Top from '../components/Top';
import Banner from '../components/Banner';
import Nav from '../components/Nav';
import BreadCrumb from '../components/BreadCrumb';
import ListFilter from '../components/ListFilter';
import ProductList from '../components/ProductList';
import ProductListItem from '../components/ProductListItem';
import Footer from '../components/Footer';

class ProductListPage extends Component {

    componentDidMount() {
        this.props.fetchAllProducts();
    }

    render() {
        let { match, menus, products } = this.props;
        let category = match.params.category;
        let url = match.url;
        // console.log(match)
        return (
            <Fragment>
                <div className="container-fluid" id="wrapper">
                    <div className="header">
                        <Top />
                        <Banner />
                        <Nav />
                    </div>
                    <div
                        className="container-fluid product-category has-banner"
                        style={{ background: `url(${process.env.PUBLIC_URL + '/img/bg-product-list-page.jpg'}) fixed center top` }}
                    >
                        <BreadCrumb url={url} category={category} product={null} />
                        <div className="list-category clear row">
                            {this.showMenus(category, menus)}
                        </div>
                        <ListFilter />

                        <ProductList category={category}>
                            {this.showProducts(category, products)}
                        </ProductList>

                    </div>
                    <div className="clear" />
                    <Footer />
                </div>
            </Fragment>
        );
    }

    showMenus = (category, menus) => {
        var result = null;
        menus
            .filter(menu => menu.label.toLowerCase() === category)
            .map(menu => {
                result = menu.subCategory.map((sub, index) => {
                    return (
                        <div className="item col-md-4" key={index}>
                            <div className="category-image">
                                <Link to={sub.to} title={sub.label} className="hover-1" >
                                    <img src={sub.image} alt={sub.label} />
                                    <h2 className="name">{sub.label}</h2>
                                </Link>
                            </div>
                        </div>
                    )
                });
                return result;
            })
        return result;
    }

    showProducts = (category, products) => {
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
        menus: state.menus,
        products: state.products
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchAllProducts: () => {
            dispatch(actFetchProductsRequest())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);