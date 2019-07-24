import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// IMPORT COMPONENTS
import Top from '../../components/Top';
import Banner from '../../components/Banner';
import Nav from '../../components/Nav';
import BreadCrumb from '../../components/BreadCrumb';
import ProductItemDetail from '../../components/ProductItemDetail';
import Footer from '../../components/Footer';

class ProductItemPage extends Component {
    
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        let { match, products } = this.props;
        let category = match.params.category;
        let id = match.params.id;
        let url = match.url;
        // console.log(match)
        return (
            <Fragment>
                <div className="container-fluid" id="wrapper">
                    <div className="header">
                        <Top />
                        <Banner />
                        <Nav />
                    </div>
                    <BreadCrumb url={url} category={category} isShowTitle={false} />
                    {this.showProducts(id, products)}
                    <Footer />
                </div>
            </Fragment>
        );
    }

    showProducts(id, products) {
        var result = null;
        if (products.length > 0) {
            result = products
                .filter(product => product.id === id)
                .map((product, index) => {
                    return <ProductItemDetail
                        key={index}
                        product={product}
                        index={index}
                    />
                })
        }
        return result;
    }

}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}
export default connect(mapStateToProps, null)(ProductItemPage);
