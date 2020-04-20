import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { actFetchProductsRequest } from '../actions';
// IMPORT COMPONENTS
import Top from '../components/Top';
import Banner from '../components/Banner';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

class ReturnPage extends Component {

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
        Trong vòng 7 ngày (kể từ khi nhận hàng) bạn có thể thông báo đến Michio Store qua Email: service@michiogroup.com hoặc số điện thoại: 0703 120 226 về việc sản phẩm lỗi. <br />
        Nhân viên tiếp nhận sẽ lưu thông tin -  xác nhận bạn đã báo Michio Store trong vòng 7 ngày.
        <h3>1, Đổi hàng:</h3>
        Khi Michio Store nhận được hàng trả về sẽ liên hệ báo xác nhận với bạn &amp; tiến hành kiểm tra xác nhận chất lượng sản phẩm &amp; thỏa điều kiện đổi trả<br />
        a, Sản phẩm lỗi do nhà sản xuất<br />
        Đổi sản phẩm &amp; gửi chuyển phát nhanh đến bạn trong thời gian sớm nhất.<br />
        Michio Store chịu 100% phí vận chuyển<br />
        b, Sản phẩm không bị lỗi, khách đổi ý<br />
        Michio Store sẽ quy đổi giá trị sản phẩm =75%*tổng tiền thanh toán. Khách có thể đổi cùng dòng hoặc khác dòng &amp; thanh toán thêm khoản chênh lệch khi đổi (nếu có).<br />
        Michio Store hỗ trợ 50% phí vận chuyển.<br />
        <h3>2, Trả hàng:</h3>
        Khi Michio Store nhận được hàng bạn trả về sẽ gửi đội ngũ kỹ thuật kiểm tra chất lượng sản phẩm.<br />
        Michio Store sẽ liên hệ xác nhận hoàn tiền với bạn khi và chỉ khi sản phẩm thỏa điều kiện đổi trả (Xem chi tiết Tại Đây ). Chậm nhất trong vòng 7 ngày, Michio Store nhận được tiền chuyển khoản từ đối tác vận chuyển
        =&gt; Tiến hành thủ tục hoàn tiền.<br />
        a, Sản phẩm lỗi do nhà sản xuất: Hoàn tiền 100%, Michio Store chịu 100% phí vận chuyển<br />
        b, Sản phẩm không bị lỗi, khách đổi ý: Hoàn tiền 75%, Michio Store hỗ trợ 50% phí vận chuyển<br /><br />
        ** Quý khách vui lòng cung cấp: Họ và tên, mã số tài khoản, tên Ngân hàng + Chi nhánh để chúng tôi có thể hoàn tiền cho quý khách.
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
export default connect(mapStateToProps, mapDispatchToProps)(ReturnPage);
