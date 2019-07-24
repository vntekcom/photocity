import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Top extends Component {
    render() {
        return (
            <div className="container-fluid robot" id="top">
                <div id="toolbar">
                    <span className="title">Hot News</span>
                    <marquee>
                        <Link to="" className="text-info">
                        <i class="far fa-flag"></i> Zhiyun smooth 4 giảm giá sâu sập sàn!
                        </Link>
                        <Link to="" className="text-info">
                        <i class="far fa-flag"></i> Feiyu Vlog Pocket sản phẩm hót nhất 2019
                        </Link>
                    </marquee>
                </div>

                <div className="social">
                    <div className="in ico">
                        <Link to="/user/login" title="Đăng nhập">
                            <button type="button" className="btn btn-info"><i className="fas fa-user" /> Đăng nhập</button>
                        </Link>
                        {/* <Link to="/user/favorite" title="Sản phẩm yêu thích">
                            <i className="fa fa-heart" /> Yêu thích
                        </Link> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Top;