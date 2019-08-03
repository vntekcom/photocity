import React, { Component, Fragment } from 'react';
import LoginForm from './../components/LoginForm';

class Cart extends Component {
    render() {
        let { cart } = this.props;
        return (
            <Fragment>
                <div className="buynow_popup text-16 text-999">
                    <p className="text-info text-25">
                        <i className="fas fa-shopping-cart" /> Hiện có {this.showTotalProcuct(cart)} sản phẩm
                    </p>

                    <div className="clear space10px" />
                    <table id="table-shopping-cart">
                        <tbody>
                            {this.props.children}
                        </tbody>
                    </table>

                    <div className="clear space10px" />
                    <div className="txt_right">
                        <span className="text-red text-bold text-25">
                            {this.showTotalAmount(cart).toLocaleString()}
                        </span>
                    </div>
                </div>

                {/* CUSTOMER INFORMATION */}
                <div className="cart-left">
                    <div className="clear" style={{ height: '80px' }}>
                        <div className="title-cart txt_b text-30 txt_u space10px ">THÔNG TIN CÁ NHÂN</div>
                        <span className="text-999">(Nếu bạn chưa có tài khoản)</span>
                    </div>
                    <input type="text" name="customerName" placeholder="Họ và tên (bắt buộc)" />                                <input type="text" name="customerEmail" placeholder="Email (không bắt buộc)" />                                <input type="text" name="customerMobile" placeholder="Số điện thoại di động (bắt buộc)" />
                    <input type="text" className="" name="customerAddress" placeholder="Địa chỉ nhận hàng (bắt buộc)" />
                    <textarea rows={2} name="note" placeholder="Ghi chú (không bắt buộc)" defaultValue={""} />
                </div>

                {/* VISITOR */}
                <div className="cart-right fr">
                    <i className="or">Or</i>
                    <LoginForm />
                </div>

                {/* COMPLETE BUTTON */}
                <div className="clear text-center">
                    <button className="txt_u btn-green text-30 txt_b" style={{ padding: '20px 100px' }}>
                        <i className="fas fa-check"></i> Hoàn tất
                    </button>
                </div>
                <div className="clear space10px" />
            </Fragment>
        );
    }

    showTotalAmount = cart => {
        let total = 0;
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                total += (cart[i].product.price > 0 ? cart[i].product.price : cart[i].product.srp) * cart[i].quantity;
            }
        }
        return total;
    }

    showTotalProcuct = cart => {
        let total = 0;
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                total += cart[i].quantity;
            }
        }
        return total;
    }
}

export default Cart;