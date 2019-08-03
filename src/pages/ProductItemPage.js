import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { actFetchProductsRequest, actAddToCart } from '../actions';
import * as Message from './../constants/Message';
import swal from 'sweetalert';
// IMPORT COMPONENTS
import Top from '../components/Top';
import Banner from '../components/Banner';
import Nav from '../components/Nav';
import BreadCrumb from '../components/BreadCrumb';
import ProductItemDetail from '../components/ProductItemDetail';
import Footer from '../components/Footer';

class ProductItemPage extends Component {

    componentDidMount() {
        this.props.fetchAllProducts();
        window.scrollTo(0, 0);
    }

    render() {
        let { match, products, cart } = this.props;
        let category = match.params.category;
        let id = match.params.id;
        let url = match.url;
        console.log(match)
        return (
            <Fragment>
                <div className="container-fluid" id="wrapper">
                    <div className="header">
                        <Top />
                        <Banner cart={cart} />
                        <Nav />
                    </div>

                    <BreadCrumb url={url} category={category} />

                    {/* showProduct METHOD */}
                    {this.showProducts(id, products)}

                    <Footer />
                </div>
            </Fragment>
        );
    }

    showProducts(id, products) {
        var result = null;
        if (products.length > 0) {
            result = products
                .filter(product => product._id === id)
                .map((product, index) => {
                    return <ProductItemDetail
                        key={index}
                        product={product}
                        index={index}
                        onAddToCart={this.props.onAddToCart}
                    />
                })
        }
        return result;
    }

}

const mapStateToProps = state => {
    return {
        products: state.products,
        cart: state.cart
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchAllProducts: () => {
            dispatch(actFetchProductsRequest())
        },
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1));
            swal({
                text: Message.MSG_ADD_TO_CART_SUCCESS,
                icon: "success",
                button: "OK",
            });
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductItemPage);
