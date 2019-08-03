import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import Parser from 'html-react-parser';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProductItemRelative from './ProductItemRelative';

class ProductItemDetail extends Component {
    render() {
        let { product } = this.props;
        let statusElm = product.status ? 'Còn hàng' : 'Hết hàng';
        let priceElm = product.price > 0 ? product.price.toLocaleString() : product.srp.toLocaleString();
        let srpElm = product.srp ? Parser(`Giá gốc: <strike>${product.srp.toLocaleString()}</strike></div>`) : 0;
        let productDetail = product.detail ? Parser(product.detail) : '';
        let imageArr = product.imageArr ? product.imageArr : [product.image];
        let colorArr = product.colorArr ? product.colorArr : {};
        // console.log(product)
        return (
            <div className="product-detail">
                {/* LEFT COL */}
                <div className="pull-left detail-left">
                    {/* PRODUCT DESCRIPTION */}
                    <div className="dl-info">
                        <div className="prod-image fl">
                            <Carousel>
                                {this.showImageArr(imageArr, product.name)}
                            </Carousel>
                        </div>
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
                    {/* PRODUCT DETAIL */}
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
                                        <Link to="#" className="act" onClick={() => this.onAddToCart(product)} >
                                            <span>Thêm vào giỏ hàng</span>
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
                    <ProductItemRelative>

                    </ProductItemRelative>
                </div>
            </div>
        );
    }

    showImageArr = (imageArr, name) => {
        var images = null;
        if (imageArr.length > 0) {
            images = imageArr.map((image, index) => {
                return (
                    <div key={index} >
                        <img src={image} alt={name} />
                    </div>
                )
            })
        }
        return images;
    }

    showColorArr = (colors, name) => {
        var result = null;
        result = Object.values(colors).map((image, index) => {
            return (
                <span className="item color" key={index}>
                    <img src={image} alt={name} />
                </span>
            )
        })
        return result;
    }

    onAddToCart = (product) => {
        this.props.onAddToCart(product)
    }
}

export default ProductItemDetail;