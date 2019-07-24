import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ArticleItem extends Component {
    render() {
        return (
            <div className="col-md-4">
                <span className="" style={{ background: '#f84743', color: '#fff', borderRadius: '10px', fontSize: '25px', padding: '10px 15px', position: 'absolute', left: '15px', top: '15px', zIndex: '2' }}>
                    <Link to="/news">Tin tức</Link>
                </span>

                <Link to="/#" title="TOP 3 LOA DI ĐỘNG TỐT NHẤT CHO DÂN DU LỊCH">
                    <img
                        data-sizes="auto"
                        className="lazyautosizes lazyloaded"
                        src="//cdn.nhanh.vn/cdn/store1/42431/art/article_1557920488_156.png"
                        data-src="//cdn.nhanh.vn/cdn/store1/42431/art/article_1557920488_156.png"
                        alt="DJI ra mắt action cam osmo nhỏ gọn với 2 màn hình, chống nước, quay 4k60p"
                        sizes="202px"
                    />
                </Link>

                <Link
                    to="/top-3-loa-di-dong-tot-nhat-cho-dan-du-lich-n48393.html"
                    style={{ color: '#FFFFFF', fontSize: '15px', padding: '10px 15px', position: 'absolute', left: '15px', bottom: '30px', zIndex: '2' }}>
                    TOP 3 LOA DI ĐỘNG TỐT NHẤT CHO DÂN DU LỊCH
                </Link>

            </div>
        );
    }
}

export default ArticleItem;