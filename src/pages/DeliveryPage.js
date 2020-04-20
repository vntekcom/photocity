import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { actFetchProductsRequest } from '../actions';
// IMPORT COMPONENTS
import Top from '../components/Top';
import Banner from '../components/Banner';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

class DeliveryPage extends Component {

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
                        <h3>1. Phạm vi áp dụng</h3>
        Michio Store cung cấp dịch vụ giao hàng tận nơi và thu tiền khi giao hàng trên toàn quốc.
        <h3>2. Sản phẩm áp dụng</h3>
        - Áp dụng đối với các sản phẩm Điện thoại, máy tính bảng, phụ kiện, v.v… được bán trên website: http://michiopay.com
        <h3>3. Chi phí vận chuyển</h3>
        a, Miễn phí :<br />
        Cho đơn hàng có giá trị &gt; 2,000,000đ (Không áp dụng cho các đơn hàng cồng kềnh, khối lượng sản phẩm lớn nhưng giá trị thấp)<br />
        b, Tính 50% phí vận chuyển:<br />
        Đối với các đơn hàng có giá trị dưới 2,000,000đ theo biểu giá của Giao Hàng Tiết Kiệm. Phí thu hộ C.O.D - khu vực ngoại thành: 1% tiền hàng (tối thiểu 10,000đ)<br />
        (*): &lt;= 100 Km gồm các tỉnh:<br />
        Bình Phước, Tây Ninh, Đồng Nai, Bình Dương, Long An, Tiền Giang, Bến Tre<br />
        (**): &lt;= 300 Km gồm các tỉnh:<br />
        Trà Vinh, Bình Thuận, Vũng Tàu, Cần Thơ, An Giang, Sốc Trăng, Kiên Giang, Vĩnh Long, Bạc Liêu, Đồng Tháp, Hậu Giang<br />
        (***): &gt; 300 Km gồm các tỉnh:<br />
        Bắc Cạn, Cao Bằng, Hà Giang, Tuyên Quang, Sơn La, Lai Châu, Điện Biên, Lào Cai, Yên Bái, Hòa Bình, Thái Nguyên, Lạng Sơn, Hưng Yên, Hải Dương, Hải Phòng, Quảng Ninh, Bắc Ninh, Bắc Giang, Vĩnh Phúc, Phú Thọ, Hà Nam, Nam Định, Thái Bình, Ninh Bình, Thanh Hóa, Nghệ An, Hà Tĩnh, Quảng Bình, Quảng Trị, Huế, Quy Nhơn, Quảng Nam, Quảng Ngãi, Bình Định, Phú Yên, Đak Lak, Đak Nông, Gia Lai, Kon Tom, Lâm Đồng, Khánh Hòa, Ninh Thuận, Cà Mau<br />
        c, Tính 100% phí vận chuyển: <br />
        Đối với các đơn hàng có giá trị  dưới 300,000đ:<br />
        Khách hàng chịu 100% Phí vận chuyển (Do đối tác vận chuyển Viettel tính )<br />
                        <h3>4. Thời gian nhận hàng:</h3>
        - Sau khi quý khách đặt mua hàng, nhân viên KingCom sẽ tiến hành gọi điện xác nhận đơn hàng với quý khách nếu trong giờ hành chính (08h00 – 17h00). Sau 17h00 nếu quý khách có đặt hàng, chúng tôi sẽ liên lạc với bạn trễ nhất vào 09h sáng ngày hôm sau.<br />
        - Trong vòng 2-6 ngày làm việc, quý khách sẽ nhận được hàng từ đối tác vận chuyển tùy khu vực:<br />
        + Khách hàng tại TP.HCM và tỉnh thành lân cận &lt;=100km: 1 - 3 ngày<br />
        + Khách hàng nằm trong khu vực &lt;=300km: 2 - 4 ngày<br />
        + Khách hàng nằm trong khu vực &gt;300km: 3 - 6 ngày<br />
                        <h3>5. Hình thức thanh toán: </h3>
        Khách hàng thanh toán khi nhận hàng (Cash On Delivery - COD), thanh toán cho đơn vị vận chuyển (Viettel thu hộ)<br />
        Hoặc xem các hình thức thanh toán khác tại đây<br />
                        <h3>6. Đối tác vận chuyển: </h3>
        giaohangtietkiem.vn
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
export default connect(mapStateToProps, mapDispatchToProps)(DeliveryPage);
