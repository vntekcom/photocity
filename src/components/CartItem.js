import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import * as Message from './../constants/Message';

class CartItem extends Component {
    render() {
        let { item } = this.props;
        let product = item.product;
        let priceElm = product.price > 0 ? product.price : product.srp;
        return (
            <Fragment>
                <tr>
                    <td className="cart-flex">
                        <div className="cartInfo-img fl">
                            <img src={product.image} alt={product.name} style={{ width: '100px' }} />
                        </div>

                        <div className="">
                            <Link to={`${product.category}/${product.slug}/${product._id}`} className="txt_000 text-18" >
                                {product.name}
                            </Link>
                            <div className="space5px" />
                            <div className="price-cart">
                                Giá: <span>{priceElm.toLocaleString()}</span>
                            </div>
                            <div className="space5px" />
                            <i className="fas fa-trash-alt fa-2x text-danger" onClick={() => this.onDelete(item.product)} />
                        </div>
                    </td>

                    <td className="txt_right" width="25%">
                        <input type="number" className="cor5px updateCart" min={1} max={100} defaultValue={item.quantity} size={3} />
                    </td>

                    <td className="txt_right" width="25%">
                        
                        <span className="txt_green text-20">
                            {this.showSubTotal((product.price > 0 ? product.price : product.srp), item.quantity)}
                        </span>
                    </td>
                </tr>
                {/* COUPON */}
                {/* <tr className="tr-coupon">
                    <td className="text-left">
                        <div className="ui ui-coupoun icon input">
                            <input id="coupon" className="prompt" name="couponCode" type="text" placeholder="Mã khuyến mại" />
                            <i id="getCoupon" className="fas fa-check" />
                        </div>
                    </td>
                    <td className="text-right">
                        Mã giảm giá: <span id="txtCode">-0đ</span>
                    </td>
                </tr> */}
                {/* SHIPPING */}
                {/* <tr>
                    <td className="text-right">
                        Phí vận chuyển: <span id="shipFee">0đ</span>
                    </td>
                </tr> */}
            </Fragment>
        );
    }

    showSubTotal = (price, quantity) => {
        return (price * quantity).toLocaleString();
    }

    onDelete = (product) => {
        swal({
            title: "Cảnh báo!",
            text: Message.MSG_WARNING_DELETE_CART,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal(Message.MSG_DELETE_PRODUCT_SUCCESS, {
                        icon: "success",
                    });
                    this.props.onDeleteInCart(product);
                }
            });

    }
}

export default CartItem;