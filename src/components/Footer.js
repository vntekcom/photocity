import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer id="footer-main" className="container-fluid">
                <div className="flow-foo">
                    <div className="row">
                        <div className="col-md-6">
                            <strong>Đăng ký nhận tin để không bỏ lỡ những ưu đãi hấp dẫn:</strong>
                            <form>
                                <input type="text" id="subscribe" placeholder="Nhập địa chỉ Email của bạn tại đây..." className="form-control ipt-email" />
                                <input defaultValue="Đăng ký" type="button" className="bt-sent btnSubscribe" />
                            </form>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <p>
                                <strong>Kết nối với chúng tôi</strong>
                            </p>
                            <div className="social-foo">
                                <a href="//www.facebook.com/michiostore2020" target="_black"><span className="fab fa-facebook-f" /></a>
                                <a href="https://youtube.com/" target="_black"><span className="fab fa-youtube" /></a>
                                <a href="https://www.instagram.com/" target="_black"><span className="fab fa-instagram" /></a>
                                <a href="https://twitter.com" target="_black"><span className="fab fa-twitter" /></a>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3">
                            {/* <Link to="/" className="link-img">
                                <img className="img-responsive" src="//cdn.nhanh.vn/cdn/boCongThuong.png" alt="da dang ky bo cong thuong" />
                            </Link> */}
                        </div>

                    </div>
                </div>

                <div className="menu-foo">
                    <div className="row">
                        <div className="col-sm-6 col-md-3">
                            <strong className="title">HƯỚNG DẪN</strong>
                            <ul>
                                <li>
                                    <Link to="/giao-hang" title="Chính sách giao hàng">Giao hàng</Link>
                                </li>
                                <li>
                                    <Link to="/thanh-toan" title="Hướng dẫn thanh toán">Thanh toán</Link>
                                </li>

                            </ul>
                        </div>

                        <div className="col-sm-6 col-md-3">
                            <strong className="title">CHÍNH SÁCH</strong>
                            <ul>
                                
                                <li>
                                    <Link to="/bao-hanh" title="Chính sách bảo hành">Bảo hành</Link>
                                </li>
                                <li>
                                    <Link to="/tra-hang" title="Hướng dẫn đổi trả hàng">Trả hàng</Link>
                                </li>

                            </ul>
                        </div>

                        <div className="col-sm-6 col-md-3">
                            <strong className="title">CHĂM SÓC KHÁCH HÀNG</strong>
                            <ol>
                                <li>
                                    <Link to="/lien-he" title="Câu hỏi thường gặp ">Liên hệ</Link>
                                </li>
                                <li>Email: admin@michiogroup.com</li>
                                <li>Giờ làm việc: 8h - 17h</li>
                            </ol>
                        </div>

                        <div className="col-sm-6 col-md-3">
                            <strong className="title">CTY TNHH CÔNG NGHỆ VÀ TRUYỀN THÔNG MICHIO</strong>
                            <div className="clearfix" />
                            <p style={{ color: 'rgb(130,130,130)', padding: '2px 0px' }}>
                                <span style={{ color: '#000000' }}>MST: 0316187393 - Điện thoại: 0703 120 226</span>
                            </p>
                            <p style={{ color: 'rgb(130,130,130)', padding: '2px 0px' }}>
                                <span style={{ color: '#000000' }}>Địa chỉ: 149/44 Luỹ Bán Bích, Phường Tân Thới Hoà, Quận Tân Phú, Thành phố Hồ Chí Minh </span>
                            </p>
                            <p style={{ color: 'rgb(130,130,130)', padding: '2px 0px' }}>
                                <span style={{ color: '#000000' }}> Người đại diện theo Pháp luật: Ông Nguyễn Quốc Phong</span>
                            </p>
                            {/* <ol style={{ marginTop: '0px', marginBottom: '10.5px', listStyleType: 'none', paddingLeft: '0px', color: 'rgb(48,48,48)', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '14px' }}>
                                <li style={{ color: 'rgb(130,130,130)', padding: '2px 0px' }}>
                                    <span style={{ color: '#000000' }}>Hotline: 0703 120 226</span>
                                </li>
                            </ol> */}
                        </div>

                    </div>
                </div>

                <div className="copy-right">
                    <div className="text-copy-right">
                        <p className="display-5">MICHIO ON MOBILE</p>
                        <img src={process.env.PUBLIC_URL + '/img/google-play.png'} className="img-responsive mr-2" alt="google play" />
                        <img src={process.env.PUBLIC_URL + '/img/app-store.png'} className="img-responsive" alt="app store" />
                    </div>
                </div>

                {/* <div style={{ bottom: '10px', padding: 0, position: 'fixed', right: '10px', zIndex: 9999 }}>
                    <img src={process.env.PUBLIC_URL + '/img/under-construction.png'} alt="under construction" width="200px" />
                </div> */}

            </footer>
        );
    }
}

export default Footer;