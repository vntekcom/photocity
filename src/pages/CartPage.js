import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { actRemoveInCart } from './../actions/index';
import PropTypes from 'prop-types';
import * as Message from './../constants/Message';
// IMPORT COMPONENTS
import Top from '../components/Top';
import Banner from '../components/Banner';
import Nav from '../components/Nav';
import BreadCrumb from '../components/BreadCrumb';
import Cart from '../components/Cart';
import CartItem from '../components/CartItem';
import Footer from '../components/Footer';

class CartPage extends Component {

    render() {
        let { cart } = this.props;
        return (
            <Fragment>
                <div className="container-fluid" id="wrapper">
                    <div className="header">
                        <Top />
                        <Banner cart={cart} />
                        <Nav />
                    </div>

                    <BreadCrumb url="/cart" category="Cart" product={null} />
                    <div className="clear" />

                    <Cart cart={cart}>
                        {this.showCart(cart)}
                    </Cart>

                    <Footer />
                </div>
            </Fragment>
        );
    }

    showCart = (cart) => {
        let result = Message.MSG_CART_EMPTY;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return <CartItem item={item} key={index} onDeleteInCart={this.props.onDeleteInCart} />
            })
        }
        return result;
    }

}

CartPage.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                _id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                SKU: PropTypes.string.isRequired,
                brand: PropTypes.string.isRequired,
                category: PropTypes.string.isRequired,
                price: PropTypes.number,
                srp: PropTypes.number.isRequired,
                status: PropTypes.bool.isRequired,
                isFlashsale: PropTypes.bool,
                isHot: PropTypes.bool,
                rating: PropTypes.number.isRequired,
                image: PropTypes.string.isRequired,
                color: PropTypes.string,
                slug: PropTypes.string.isRequired,
            }).isRequired,
            quantity: PropTypes.number.isRequired
        })
    ).isRequired
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onDeleteInCart: (product) => {
            dispatch(actRemoveInCart(product))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
