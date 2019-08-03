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
                                <a href="https://www.facebook.com/"><span className="fab fa-facebook-f" /></a>
                                <a href="https://youtube.com/"><span className="fab fa-youtube" /></a>
                                <a href="https://www.instagram.com/"><span className="fab fa-instagram" /></a>
                                <a href="https://twitter.com"><span className="fab fa-twitter" /></a>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3">
                            <Link to="/" className="link-img">
                                <img className="img-responsive" src="//cdn.nhanh.vn/cdn/boCongThuong.png" alt="da dang ky bo cong thuong" />
                            </Link>
                        </div>

                    </div>
                </div>

                <div className="menu-foo">
                    <div className="row">
                        <div className="col-sm-6 col-md-3">
                            <strong className="title">HƯỚNG DẪN</strong>
                            <ul>
                                <li>
                                    <Link to="/" title="Hướng dẫn sử dụng">Hướng dẫn sử dụng</Link>
                                </li>
                                <li>
                                    <Link to="/" title="Hướng dẫn thanh toán">Hướng dẫn thanh toán</Link>
                                </li>
                                <li>
                                    <Link to="/" title="Hướng dẫn đổi trả hàng">Hướng dẫn đổi trả hàng</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-sm-6 col-md-3">
                            <strong className="title">Chăm sóc khách hàng</strong>
                            <ul>
                                <li>
                                    <Link to="/" title="Chính sách giao hàng">Chính sách giao hàng</Link>
                                </li>
                                <li>
                                    <Link to="/" title="Chính sách đổi trả">Chính sách đổi trả</Link>
                                </li>
                                <li>
                                    <Link to="/" title="Chính sách bảo hành">Chính sách bảo hành</Link>
                                </li>
                                <li>
                                    <Link to="/" title="Câu hỏi thường gặp ">Câu hỏi thường gặp </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-sm-6 col-md-3">
                            <strong className="title">Chăm sóc khách hàng</strong>
                            <ol>
                                <li>Email: support@photocity.vn
                                    <span />
                                </li>
                                <li>Giờ làm việc: 8h - 17h
                                    <span />
                                </li>
                            </ol>
                        </div>

                        <div className="col-sm-6 col-md-3">
                            <strong className="title">Công ty TNHH DREAM-FLY</strong>
                            <div className="clearfix" />
                            <p style={{ color: 'rgb(130,130,130)', padding: '2px 0px' }}>
                                <span style={{ color: '#000000' }}>
                                    MST: 0314180667
                                </span>
                            </p>
                            <ol style={{ marginTop: '0px', marginBottom: '10.5px', listStyleType: 'none', paddingLeft: '0px', color: 'rgb(48,48,48)', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '14px' }}>
                                <li style={{ color: 'rgb(130,130,130)', padding: '2px 0px' }}>
                                    <span style={{ color: '#000000' }}>Hotline: (028) 38-440-797</span>
                                </li>
                            </ol>
                        </div>

                    </div>
                </div>

                <div className="copy-right">
                    <div className="text-copy-right">
                        <p className="display-5">PHOTOCITY ON MOBILE</p>
                        <img src={process.env.PUBLIC_URL + '/img/google-play.png'} className="img-responsive mr-2" alt="google play" />
                        <img src={process.env.PUBLIC_URL + '/img/app-store.png'} className="img-responsive" alt="app store" />
                    </div>
                </div>

                <div style={{ bottom: '10px', padding: 0, position: 'fixed', right: '10px', zIndex: 9999 }}>
                    <img src={process.env.PUBLIC_URL + '/img/under-construction.png'} alt="under construction" width="200px" />
                </div>
            </footer>
        );
    }
}

export default Footer;