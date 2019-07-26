import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { actFetchProductsRequest } from '../actions';
// IMPORT COMPONENTS
import Top from '../components/Top';
import Banner from '../components/Banner';
import Nav from '../components/Nav';
import SlideHome from '../components/SlideHome';
import FlashSale from '../components/FlashSale';
import FlashSaleItem from '../components/FlashSaleItem';
import HotProduct from '../components/HotProduct';
import ProductItem from '../components/ProductBlockItem';
import Article from '../components/Article';
import ProductBlock from '../components/ProductBlock';
import Footer from '../components/Footer';

class HomePage extends Component {

    componentDidMount(){
        this.props.fetchAllProducts();
    }

    render() {
        let { menus, products } = this.props;
        return (
            <Fragment>
                <div className="container-fluid" id="wrapper">
                    <div className="header">
                        <Top />
                        <Banner />
                        <Nav />
                        <SlideHome />
                    </div>
                    <div className="clear" />
                    <FlashSale>
                        {this.showProductsFlashsale(products)}
                    </FlashSale>
                    <div className="clear" />
                    <div className="text-center">
                        <img src="./img/banner/banner_1000x100.jpg" className="img-responsive" alt="Banner 1000" ></img>
                    </div>
                    {/* <NewProduct /> */}
                    <HotProduct>
                        {this.showProductsHot(products)}
                    </HotProduct>
                    <div className="clear" />
                    <Article>

                    </Article>>
                    <div className="clear" />
                    {/* PRODUCTS LIST */}
                    {/* <ProductList txtTitle="Gimbal" /> */}
                    {this.showProductBlock(products, menus)}
                    <div className="clear" />
                    <Footer />
                </div>
            </Fragment>
        );
    }

    showProductBlock = (products, menus) => {
        let result = null;
        result = menus
            .map((menu, index) => {
                var productCount = products.filter(item => item.category.toLowerCase() === menu.label.toLowerCase()).length;
                if (productCount > 0) {
                    return <ProductBlock productCount={productCount} category={menu.label} key={index} products={products} menus={menus} />
                }
                return result;
            })
        return result;
    }

    showProductsFlashsale = (products) => {
        let result = null;
        result = products
            .filter(product => product.isFlashsale && product.price)
            .slice(0, 8)
            .map((product, index) => {
                return <FlashSaleItem product={product} key={index} />
            })
        return result;
    }

    showProductsHot = (products) => {
        var result = null;
        result = products
            .filter(product => product.isHot)
            .slice(0, 8)
            .map((product, index) => {
                return <ProductItem
                    key={index}
                    product={product}
                    index={index}
                />
            })
        return result;
    }
}

const mapStateToProps = state => {
    return {
        menus: state.menus,
        products: state.products
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchAllProducts: () => {
            dispatch(actFetchProductsRequest())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
