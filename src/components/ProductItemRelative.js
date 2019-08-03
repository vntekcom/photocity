import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItemRelative extends Component {
    render() {
        return (
            <div className="col-right" >
                <div className="title robot">Sản phẩm liên quan</div>
                <div className="product-list">
                    <ul className="list slides">
                        <li>
                            <div className="p_container">
                                <div className="option">
                                    <i className="icon_new">NEW</i>
                                </div>
                                <Link to="/loa-sony-srsxb32-extra-bass-p14521087.html" className="p-img">
                                    <img src="//cdn.nhanh.vn/cdn/store1/42431/ps/20190607/xb32.jpg" alt="Loa Sony SRS-XB32 EXTRA BASS" />
                                </Link>
                                <Link className="p-name" to="/loa-sony-srsxb32-extra-bass-p14521087.html">Loa Sony SRS-XB32 EXTRA BASS</Link>
                                <div className="p_price">
                                    3,590,000đ</div>
                            </div>
                            <div className="p_container">
                                <div className="option">
                                    <i className="icon_new">NEW</i>
                                </div>
                                <Link to="/loa-sony-srsxb22-extra-bass-chinh-hang-p14520802.html" className="p-img">
                                    <img src="//cdn.nhanh.vn/cdn/store1/42431/ps/20190607/xb22.jpg" alt="Loa Sony SRS-XB22 EXTRA BASS ( Chính hãng)" />
                                </Link>
                                <Link className="p-name" to="/loa-sony-srsxb22-extra-bass-chinh-hang-p14520802.html">Loa Sony SRS-XB22 EXTRA BASS ( Chính hãng)</Link>
                                <div className="p_price">
                                    2,390,000đ</div>
                            </div>
                            <div className="p_container">
                                <div className="option" />
                                <Link to="/loa-di-dong-sonyxb21-trang-p14246995.html" className="p-img">
                                    <img src="//cdn.nhanh.vn/cdn/store1/42431/ps/20190525/sony_srs_xb21_do_20190217173925_640x640.jpg" alt="Loa di động SonyXB21 Trắng" />
                                </Link>
                                <Link className="p-name" to="/loa-di-dong-sonyxb21-trang-p14246995.html">Loa di động SonyXB21 Trắng</Link>
                                <div className="p_price">
                                    1,980,000đ</div>
                            </div>
                            <div className="p_container">
                                <div className="option" />
                                <Link to="/loa-di-dong-sonyxb21-xanh-p14246993.html" className="p-img">
                                    <img src="//cdn.nhanh.vn/cdn/store1/42431/ps/20190525/sony_srs_xb21_do_20190217173925_640x640.jpg" alt="Loa di động SonyXB21 Xanh" />
                                </Link>
                                <Link className="p-name" to="/loa-di-dong-sonyxb21-xanh-p14246993.html">Loa di động SonyXB21 Xanh</Link>
                                <div className="p_price">
                                    1,980,000đ</div>
                            </div>
                            <div className="p_container">
                                <div className="option" />
                                <Link to="/loa-sony-gtkxb5-p14246992.html" className="p-img">
                                    <img src="//cdn.nhanh.vn/cdn/store1/42431/ps/20190525/loa_sony_xb5e_20180425114719_640x376.jpg" alt="Loa Sony GTK-XB5" />
                                </Link>
                                <Link className="p-name" to="/loa-sony-gtkxb5-p14246992.html">Loa Sony GTK-XB5</Link>
                                <div className="p_price">
                                    3,490,000đ</div>
                            </div>
                            <div className="p_container">
                                <div className="option" />
                                <Link to="/loa-sony-gtkxb60-p14246991.html" className="p-img">
                                    <img src="//cdn.nhanh.vn/cdn/store1/42431/ps/20190525/gtk_xb60_1_20171020111820_640x640.jpg" alt="Loa Sony GTK-XB60" />
                                </Link>
                                <Link className="p-name" to="/loa-sony-gtkxb60-p14246991.html">Loa Sony GTK-XB60</Link>
                                <div className="p_price">
                                    5,590,000đ</div>
                            </div>
                            <div className="p_container">
                                <div className="option" />
                                <Link to="/loa-sony-gtkxb7-p14246990.html" className="p-img">
                                    <img src="//cdn.nhanh.vn/cdn/store1/42431/ps/20190525/sony_xb7_3_20180425112652_640x640.jpg" alt="Loa Sony GTK-XB7" />
                                </Link>
                                <Link className="p-name" to="/loa-sony-gtkxb7-p14246990.html">Loa Sony GTK-XB7</Link>
                                <div className="p_price">
                                    5,290,000đ</div>
                            </div>
                            <div className="p_container">
                                <div className="option" />
                                <Link to="/loa-sony-gtkxb90-p14246989.html" className="p-img">
                                    <img src="//cdn.nhanh.vn/cdn/store1/42431/ps/20190525/loa_20180321173452_640x518.jpg" alt="Loa Sony GTK-XB90" />
                                </Link>
                                <Link className="p-name" to="/loa-sony-gtkxb90-p14246989.html">Loa Sony GTK-XB90</Link>
                                <div className="p_price">
                                    7,790,000đ</div>
                            </div>
                        </li>
                    </ul>
                    <div className="clear" />
                </div>
         </div>
   
        );
    }
}

export default ProductItemRelative;