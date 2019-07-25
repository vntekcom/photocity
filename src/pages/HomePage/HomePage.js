import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// IMPORT COMPONENTS
import Top from '../../components/Top';
import Banner from '../../components/Banner';
import Nav from '../../components/Nav';
import SlideHome from '../../components/SlideHome';
import FlashSale from '../../components/FlashSale';
// import NewProduct from '../../components/NewProduct';
import HotProduct from '../../components/HotProduct';
import Article from '../../components/Article';
import ProductBlock from '../../components/ProductBlock';
import Footer from '../../components/Footer';
import { actFetchProductsRequest } from '../../actions';

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

                    <FlashSale />

                    <div className="clear" />

                    <div className="text-center">
                        <img src="./img/banner/banner_1000x100.jpg" className="img-responsive" alt="Banner 1000" ></img>
                    </div>

                    {/* <NewProduct /> */}

                    <HotProduct />

                    <div className="clear" />

                    <Article />

                    <div className="clear" />

                    {/* PRODUCTS LIST */}
                    {/* <ProductList txtTitle="Gimbal" /> */}
                    {this.showProductList(products, menus)}

                    <div className="clear" />

                    <Footer />

                </div>
            </Fragment>
        );
    }

    showProductList = (products, menus) => {
        let result = null;
        result = menus
            .map((menu, index) => {
                var productCount = products.filter(item => item.category.toLowerCase() === menu.label.toLowerCase()).length;
                if (productCount > 0) {
                    return <ProductBlock productCount={productCount} category={menu.label} key={index} />
                }
                return result;
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
