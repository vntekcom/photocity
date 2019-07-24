import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Parser from 'html-react-parser';
import Modal from 'react-responsive-modal';

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};

class ProductListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        let { product } = this.props;
        let productPrice = product.price > 0 ? product.price.toLocaleString() : '';
        let productSRP = product.srp > 0 ? product.srp.toLocaleString() : '';
        const { open } = this.state;
        return (
            <Fragment>
                <li className="slideInLeft" data-wow-delay="0.04s">
                    <div className="p_container">

                        {/* <div className="option">
                            <i className="gift"><i class="fas fa-gift"></i> QUÀ TẶNG</i>
                            <i className="off">-11%</i>
                        </div> */}

                        <Link to={`/${product.category}/${product.slug}/${product.id}`} title={product.name} className="p-img" >
                            <img src={product.image} alt={product.name} data-sizes="auto" className="lazyautosizes lazyloaded" sizes="180px" />
                        </Link>

                        <Link to={`/${product.category}/${product.slug}/${product.id}`} >
                            {product.name}
                        </Link>

                        <div className="text-warning text-20" >
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                            <i className="far fa-star"></i>
                        </div>

                        <div className="p_price">
                            {productPrice} <span>{productSRP}</span>
                        </div>

                        <div className="product-tip">
                            {/* <div className="summary">
                                {Parser(product.description)}
                            </div> */}

                            <Link to={`/${product.category}/${product.slug}/${product.id}`} className="act js-add-cart">
                                <span>Mua Ngay</span>
                            </Link>
                        </div>

                        <div className="js-quick-button-group">
                            <button className="js-add-to-cart"  >
                                <i className="fa fa-shopping-cart" />
                            </button>

                            <button className="js-quick-product" onClick={this.onOpenModal}>
                                Xem nhanh
                        </button>
                        </div>
                    </div>
                </li>

                <Modal open={open} onClose={this.onCloseModal} style={styles} center>
                    <div className="product-detail__left" id="header-position">
                        <div className="row">
                            <div className="col-md-5 col-sm-6 product-detail__info-block">
                                <div className="quick-images">
                                    <img className="full" src={product.image} alt={product.name} />
                                </div>
                                <div className="clearfix" />
                                {/* <div className="quick-owl-row">
                                    <div className="quick-owl owl-carousel owl-theme">
                                        <img className="full" src="//cdn.nhanh.vn/cdn/store1/42431/ps/20190525/1_20171118132418_640x640.jpg" data-src="//cdn.nhanh.vn/cdn/store1/42431/ps/20190525/1_20171118132418_640x640.jpg" alt="Sony Alpha A7 II Body - (Chính hãng)" />
                                        <img className="full" src="//cdn.nhanh.vn/cdn/store1/42431/ps/20190525/2_20171118132418_640x640.jpg" data-src="//cdn.nhanh.vn/cdn/store1/42431/ps/20190525/2_20171118132418_640x640.jpg" alt="Sony Alpha A7 II Body - (Chính hãng)" />
                                        <img className="full" src="//cdn.nhanh.vn/cdn/store1/42431/ps/20190525/3_20171118132419_640x640.jpg" data-src="//cdn.nhanh.vn/cdn/store1/42431/ps/20190525/3_20171118132419_640x640.jpg" alt="Sony Alpha A7 II Body - (Chính hãng)" />
                                        <img className="full" src="//cdn.nhanh.vn/cdn/store1/42431/ps/20190525/4_20171118132419_640x640.jpg" data-src="//cdn.nhanh.vn/cdn/store1/42431/ps/20190525/4_20171118132419_640x640.jpg" alt="Sony Alpha A7 II Body - (Chính hãng)" />
                                        <img className="full" src="//cdn.nhanh.vn/cdn/store1/42431/ps/20190525/5_20171118132419_640x640.jpg" data-src="//cdn.nhanh.vn/cdn/store1/42431/ps/20190525/5_20171118132419_640x640.jpg" alt="Sony Alpha A7 II Body - (Chính hãng)" />
                                        <img className="full" src="//cdn.nhanh.vn/cdn/store1/42431/ps/20190525/6_20171118132420_640x640.jpg" data-src="//cdn.nhanh.vn/cdn/store1/42431/ps/20190525/6_20171118132420_640x640.jpg" alt="Sony Alpha A7 II Body - (Chính hãng)" />
                                    </div>
                                </div> */}
                            </div>
                            <div className="col-md-7 col-sm-6 product-detail__info product-detail__info-block">
                                <div className="hidden-xs">
                                    <div className="product-detail__title">
                                        <h1 className="text-warning">
                                            {product.name}
                                        </h1>
                                        <div className="product-detail__title-brand">
                                            Mã sản phẩm: &nbsp;{product.SKU}
                                            <span className="divider">|</span>
                                            Thương hiệu:&nbsp;{product.brand}
                                        </div>
                                    </div>
                                </div>
                                <div className="product-detail__price">
                                    <div className="product-detail__price-info">
                                        <div>
                                            <span className="text-red" style={{ fontSize: '45px' }}>{productPrice} </span>
                                            <span className="strike">{productSRP}</span>
                                        </div>

                                        {/* <div className="discount__meta">
                                            <span className="price-info__discount"> -25% </span>
                                        </div> */}
                                    </div>
                                </div>

                                <div className="product-detail__order">
                                    <div className="p-3 mb-2 bg-secondary text-white">
                                        {Parser(product.description)}
                                    </div>
                                    <div className="d-quantiy-changer p-b-12">
                                        <div className="txt-level-count-stock">Số lượng:</div>
                                        <div className="qty-cart-product-box">
                                            <input type="number" defaultValue={1} min={1} max={100} className="form-control" />
                                        </div>
                                        {/* <div className="txt-total-stock"> (Còn 5000 sản phẩm)</div> */}
                                    </div>
                                    <div className="qty-alert alert alert-warning" />
                                    <div className="clearfix" />
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <div id="quickToCheckout" className="btn btn-modal-quick btn-default full " title data-original-title>
                                                Mua ngay</div>
                                        </div>
                                        {/* <div className="col-md-6 col-sm-6 col-xs-12">
                                            <div id="quickToCart" className="btn btn-modal-quick btn-default full " data-psid={14246742} data-selid={14246742} title data-ck={1} data-original-title>
                                                Thêm vào giỏ hàng</div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>

            </Fragment>
        );
    }
}

export default ProductListItem;
