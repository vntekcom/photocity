import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { actFetchProductsRequest } from '../actions';
// IMPORT COMPONENTS
import Top from '../components/Top';
import Banner from '../components/Banner';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

class WarrantyPage extends Component {

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
        <h3>Điều 1: Quy định về thời gian bảo hành</h3>
        1.1 Điện thoại, máy tính bảng: Bảo hành 12 tháng tính từ ngày mua (phụ kiện kèm theo chỉ BH 6 tháng)<br />
        1.2 Máy quay phim, máy ảnh số: Bảo hành 12 tháng tính từ ngày mua.<br />
        1.3 Các loại phụ kiện bán riêng, không đi kèm theo sản phẩm.<br />
        a.Loại phụ kiện có hóa đơn + có phiếu bán hàng: 12 tháng (Trừ bao da bàn phím).<br />
        b.Loại phụ kiện không có hóa đơn: 03 tháng tính từ ngày mua trên phiếu bán hàng.<br />
        1.4  Đổi DOA trong vòng 14 ngày cho Đại lý đối với lỗi kỹ thuật phần cứng của nhà sản xuất.<br />
        1.5 Máy bảo hành phải còn hạn bảo hành dựa trên một trong các yếu tố sau: Tem bảo hành, phiếu bảo hành, hóa đơn bán hàng.<br />
        1.6 Trong thời hạn bảo hành, sản phẩm được sửa chữa miễn phí khi các linhkiện cấu thành sản phẩm tự hư hỏng hoặc hỏng do lỗi sản xuất.<br />
        <h3>Điều 2: Sản phẩm không được bảo hành trong các trường hợp sau:</h3>
        2.1 Hư hỏng do thiên tai, tai nạn hoặc sử dụng sai hướng dẫn (ví dụ: Sét đánh, nguồn điện không ổn định, chất lỏng vào, rơi vỡ, nứt vỡdo va đập, bảo dưỡng sai hướng dẫn…)<br />
        2.2 Hư hỏng do bị các loại động vật chui vàotrong sản phẩm.<br />
        2.3 Sản phẩm đã bị thay đổi hoặc sửa chữa tạicác nơi không được chỉ định bởi Michio Store.<br />
        2.4 Màn hình LCD có từ 3 điểm chết trở xuống.<br />
        2.5 Mất hoặc hư hỏng phần mềm, ứng dụng, dữ liệu do người dùng tự ý cài đặt mà không phải do Michio cung cấp.<br />
        2.6 Lỗi (sự cố) phát sinh cho sản phẩm do việc dùng kết hợp với các phụkiện, sản phẩm, thiết bị phụ thuộc, thiết bị ngoại vi khác hoặc sửdụng phần mềm không phù hợp.<br />
        2.7 Lỗi (sự cố) phát sinh cho sản phẩm do việc sử dụng phụ kiện không chính hãng.<br />
        2.8 Nhãn ghi model sản phẩm, số seri máy hoặc tem niêm trên sản phẩm không còn nguyên vẹn.<br />
        2.9 Phiếu bảo hành không hợp lệ (các thông tin trên phiếukhông được điền đầyđủ, bị tẩy xóa hoặc sửa lại); Không có phiếu bảo hành hoặc không có dữ liệu bảo hành trên hệ thống dữ liệu của công ty.<br />
        2.10 Số IMEI trong máy điện thoại di động(bấm *#06#) và số IMEI in trên nhãn máy không giống nhau.<br />
        2.11 Các hư hỏng do lỗi của nhà cung cấp mạng điện thoại, dịch vụ truyềnhình hoặc mạng internet.<br />
        2.12 Điện thoại, máy tính bảng bị khóa máy hoặc khóa SIM bởi người sử dụng.<br />
        2.13 Các bộ phận bị hao mòn tự nhiên trong quá trình sử dụng: Vỏ máy, bàn phím…<br />
        2.14 Việc bảo hành không bao gồm việc hỗ trợ kỹ thuật phần cứng (kết nối, cài đặt…) hoặc hướng dẫn sử dụng phần mềm.<br />
        2.15 Sản phẩm bị móp méo, biến dạng do rơi rớt va đập hoặc do có tác động của ngoại lực tác động lên sản phẩm.<br />
        <h3>Điều 3: Quyền hạn của trung tâm bảo hành Michio</h3>
        3.1 Trong trường hợp có thay thế linh kiện, Michio sẽ thu hồi lại linh kiện hỏng của sản phẩm. Michio Store có quyền dùng linh kiện mới, linh kiện tái chế hoặc linh kiện đã cải tiến để thực hiện sửa chữa và thay thế cho linh kiện hỏng.<br />
        3.2  Quý khách phải sao lưu tất cả các phần mềm, ứng dụng, dữ liệu hoặc bất kỳ nội dung nào khác được lưu trữ trong sản phẩm trước khi gửi sản phẩm cho Michio kiểm tra, sửa chữa. Quý khách phải hiểu tất cả các nội dung lưu trữ trong sản phẩm có thể bị hư hỏng, mất mát hoặc sẽ bị định dạng lại trong quá trình kiểm tra, sửa chữa và Michio sẽ không chịu trách nhiệm cho bất kỳ thiệt hại trực tiếp hoặc gián tiếp nào của Quý khách phát sinh từ sự hư hỏng hoặc mất mát này.<br />
        3.3 Sau khi kiểm tra, sửa chữa, sản phẩm có thể sẽ được cấu hình trở về tình trạng xuất xưởng ban đầu (tùy thuộc vào sự sẵn có của phần mềm phục hồi).<br />
        3.4 Trước khi mang sản phẩm đến sửa chữa, quý khách phải chắc chắn gỡ bỏ tất cảcác linh kiện, phụ kiện, thiết bị gắn thêm mà không được cung cấp hoặc bảo hành bởi Michio Store. Michio Store sẽ không chịu trách nhiệm về sự hư hỏng hoặc mất mát của chúng (nếu có) trong quá trình sửa chữa.<br />
        3.5 Để phục vụ cho việc sửa chữa, quý khách phải cung cấp mật khẩu để bật nguồn và tài khoản đăng nhập vào sản phẩm với quyền quản trị (nếu có).<br />
        <h3>Điều 4: Quy định bảo hành hàng DOA</h3>
        4.1 Hàng DOA saukhi được chuyển đến trung tâm bảo hành của Michio sẽ đượcxử lí theo các trìnhtự sau đây:<br />
        4.1.1    Máy hỏng =&gt; Mang đến TTBH Michio Store =&gt; Kiểmtra, reload OS, nạp SW =&gt; OK =&gt; trả lại cho đại lí.<br />
        4.1.2    Máy hỏng =&gt; Mang đến TTBH Michio Store=&gt; Kiểm tra, reload OS, nạp SW =&gt; No ok=&gt; Đổi mới cho đại lí.<br />
        4.2  Máy bị lỗi do nhà sản xuấttrong vòng  (14) ngày kể từ ngàymua hàng sẽ được đổi mới.<br />
        4.3  Đại lý cần phải cung cấp đầy đủ phiếu mua hàng hoặc hoá đơn VAT (nếu có)<br />
        4.4  Máy DOA của đạilý phải được gửi tới trung tâm bảo hành của Côngty Michio trong vòng tối đa03 (ba) ngày kể từ ngày nhận máy từ khách lẻ vàđược kiểm tra tại trung tâm dịch vụ bảo hành của Michio Store.<br />
        4.5 Máy còn giữnguyên trạng mới 100% ,bộ vỏ bên ngoài thân máy không bị cọxát, xước hoặc có dấuhiệu của va đập/rơi rớt.<br />
        4.6  Số IMEI và sốSERIAL trên thân máy và trên hộp phải trùng nhau.<br />
        4.7 Máy bao gồm đầyđủ toàn bộ linh phụ kiện đi kèm, kể cả sách hướng dẫn và đĩa CD license (theođúng tiêu chuẩn đóng gói của hãng).<br />
        4.8  Phải cònnguyên tình trạng và đầy đủ của tem bảo hành của Nhàphân phối.<br />
        4.9  Máy bị lỗi do khách hàng sử dụng không đúng theo sách hướng dẫn.<br />
        4.10  Máy bị lỗi chức năng phải được xác minh lỗi rõ ràng và cụ thể.<br />
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
export default connect(mapStateToProps, mapDispatchToProps)(WarrantyPage);
