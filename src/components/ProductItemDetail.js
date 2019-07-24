import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import Parser from 'html-react-parser';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class ProductDetail extends Component {
    render() {
        let { product } = this.props;
        let statusElm = product.status ? 'Còn hàng' : 'Hết hàng';
        let priceElm = product.price ? product.price.toLocaleString() : 0;
        let srpElm = product.srp ? Parser(`<div className="space10px">Giá gốc: <strike>${product.srp.toLocaleString()}</strike></div>`) : 0;
        let productDetail = product.detail ? Parser(product.detail) : '';
        let imageArr = product.imageArr ? product.imageArr : [product.image];
        let colorArr = product.colorArr ? product.colorArr : [];
        // console.log(product)
        return (
            <div className="product-detail">
                {/* LEFT COL */}
                <div className="pull-left detail-left">
                    <div className="dl-info">
                        {/* IMAGES */}
                        <div className="prod-image fl">
                            <Carousel>
                                {this.showImageArr(imageArr, product.name)}
                            </Carousel>
                        </div>

                        {/* DESCRIPTION */}
                        <div className="prod-info fl">
                            {/* TITLE */}
                            <h1 className="text-warning">
                                {product.name}
                            </h1>

                            <div className="list">
                                {/* BRAND */}
                                <div className="brand txt_b">
                                    <Link to="/brand/">
                                        {product.brand}
                                    </Link>
                                </div>

                                <div className="item">
                                    <span className="txt_999">Tóm tắt sản phẩm:</span>
                                    <div className="value">
                                        <div className="summary-detail" >
                                            {Parser(product.description)}
                                        </div>
                                        {/* <div className="viewmore-summary open" style={{ display: 'block' }}>
                                            Xem thêm...
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="clear" />

                            {/* PRODUCT COLOR */}
                            <div id="new-config">
                                <div className="name">Màu sắc:</div>
                                {this.showColorArr(colorArr, product.name)}
                            </div>
                        </div>
                        <div className="clear" />
                    </div>

                    {/* THONG TIN CHI TIET */}
                    <div className="col-left">
                        <div className="clear space10px" />
                        <div className="dl-info text-justify">
                            <h2>CHI TIẾT SẢN PHẨM</h2>
                            {productDetail}
                        </div>
                        <div className="clear space10px" />
                    </div>

                    {/* DANH GIA VA NHAN XET */}
                    <div className="col-left">
                        <div className="clear space10px" />
                        <div className="dl-info text-justify">
                            <h2>ĐÁNH GIÁ VÀ NHẬN XÉT</h2>
                            <div className="text-warning text-20" >
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                                <i className="far fa-star"></i>
                            </div>
                            <span className="text-999">9 tháng trước</span>
                            <span className="text-bold"> bởi Linh D.</span> <i className="fas fa-user-check text-green"></i>
                            <div className="">
                                Sản phẩm chất lượng tốt, đáng mua lắm! tk shop!
                            </div>
                        </div>
                        <div className="clear space10px" />
                    </div>

                    {/* DAT CAU HOI */}
                    <div className="col-left">
                        <div className="clear space10px" />
                        <div className="dl-info text-justify">
                            <h2>CÂU HỎI VỀ SẢN PHẨM NÀY</h2>
                            <p>
                                <i className="far fa-question-circle"></i> Bảo hành thế nào shop ơi?
                            </p>
                            <p className="text-info">
                                <i className="far fa-comment-dots"></i> Bảo hành chính hãng 12 tháng bạn nhé!
                            </p>
                        </div>
                        <div className="clear space10px" />
                    </div>
                </div>

                {/* RIGHT COL */}
                <div className="pull-right detail-right">
                    {/* PRICE */}
                    <div className="prod-price-2">
                        <div className="p-style-2" id="info-normal_product">
                            <ul className="ul list">
                                <li>
                                    <div className="tip">
                                        <div className="price hr space10px text-center">
                                            <span className="text-red" style={{ fontSize: '45px' }}>
                                                {priceElm}
                                            </span>
                                            <i className="far fa-heart"> Thêm vào yêu thích</i>
                                        </div>
                                        <div className="space10px">
                                            SKU: <strong>{product.SKU}</strong>
                                        </div>
                                        {srpElm}
                                        <div className="space10px">
                                            Tình trạng: <span className="text-green">{statusElm}</span>
                                        </div>
                                        <Link to="/" className="act">
                                            <span>Mua Ngay</span>
                                        </Link>
                                    </div>
                                    <div className="clear" />
                                </li>
                                <li>
                                    <div className="tip">
                                        <div className="hr space10px">
                                            <span>Được bán bởi:</span>
                                            <div className="pull-right">
                                                <Link to="">
                                                    <span className="text-25 text-warning">
                                                        KingCom Store
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="space10px">
                                            Đánh giá tích cực: <span className="text-green">80%</span>
                                        </div>
                                    </div>
                                    <div className="clear" />
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* RELATIVE PRODUCTS */}
                    <div className="col-right">
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

                </div>

            </div >
        );
    }

    showImageArr = (imageArr, name) => {
        var images = null;
        if (imageArr.length > 0) {
            images = imageArr.map((image, index) => {
                return (
                    <div>
                        <img src={image} alt={name} key={index} />
                    </div>
                )
            })
        }
        return images;
    }

    showColorArr = (colorArr, name) => {
        var colors = null;
        if (colorArr.length > 0) {
            colors = colorArr.map((image, index) => {
                return (
                    <span className="item color" >
                        <img src={image} alt={name} key={index} />
                    </span>
                )
            })
        }
        return colors;
    }
}

export default ProductDetail;