import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { actFetchProductsRequest } from '../actions';
// IMPORT COMPONENTS
import Top from '../components/Top';
import Banner from '../components/Banner';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

class PaymentPage extends Component {

    componentDidMount() {
        this.props.fetchAllProducts();
    }

    render() {
        let { menus, products, cart } = this.props;
        return (
            <Fragment>
                <div className="container-fluid" id="wrapper">
                    <div className="header">
                        <Top />
                        <Banner cart={cart} />
                        <Nav />
                    </div>

                    <div className="clear" />

                    <div>
        <h3>I. Thanh Toán Tiền Mặt:</h3>
        1. Tại Văn Phòng của Michio Store.<br />
        2. Tại Nhà/Nơi Nhận Hàng do quý khách chỉ định, thanh toán cho nhân viên giao hàng thuộc công ty vận được Michio Store chỉ định<br />
        <h3>II, Thanh Toán Chuyển Khoản: (*)</h3>
        Chuyển khoản đến ngân hàng cho chúng tôi theo thông tin:<br />
        1. Tên Ngân Hàng: ACB – CN Tân Phong<br />
        2. Chủ Tài Khoản: CÔNG TY TNHH CÔNG NGHỆ VÀ TRUYỀN THÔNG MICHIO<br />
        3. Số Tài Khoản: 45884688<br />
        4. Nội Dung: Mua-Tên Khách Hàng-Tên Sản Phẩm-Số Điện Thoại<br />
        <h3>II, Thanh Toán Qua MOMO: (*)</h3>
        Số điện thoại: 0703 120 226<br />
      </div>

                    <div className="clear" />

                    <Footer />

                </div>
            </Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        menus: state.menus,
        products: state.products,
        cart: state.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllProducts: () => {
            dispatch(actFetchProductsRequest())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PaymentPage);
