import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actFetchProductsRequest, actAddToCart } from '../actions';
import * as Message from './../constants/Message';
import swal from 'sweetalert';
// IMPORT COMPONENTS
import Top from '../components/Top';
import Banner from '../components/Banner';
import Nav from '../components/Nav';
import BreadCrumb from '../components/BreadCrumb';
// import ListFilter from '../components/ListFilter';
import ProductListFilter from '../components/ProductListFilter';
import ProductList from '../components/ProductList';
import ProductListItem from '../components/ProductListItem';
import Footer from '../components/Footer';

class ProductListPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterColor: '',
            filterPrice: '',
            sortBy: '',
            sortValue: 1,
        }
    }

    componentDidMount() {
        this.props.fetchAllProducts();
        window.scrollTo(0, 0);
    }

    onSort = (sort) => {
        this.setState({
            sortBy: sort.by,
            sortValue: sort.value
        }, () => {
            console.log(this.state)
        })
    }

    onFilterColor = (filterColor) => {
        this.setState({
            filterColor: filterColor.value
        }, () => {
            // console.log(this.state)
        })
    }

    onFilterPrice = (filterPrice) => {
        this.setState({
            filterPrice: filterPrice.value
        }, () => {
            // console.log(this.state)
        })
    }

    render() {
        let { match, menus, products, cart } = this.props;
        let { sortBy, sortValue, filterColor, filterPrice } = this.state;
        let category = match.params.category;
        let url = match.url;
        return (
            <Fragment>
                <div className="container-fluid" id="wrapper">

                    <div className="header">
                        <Top />
                        <Banner cart={cart} />
                        <Nav />
                    </div>

                    <div
                        className="container-fluid product-category has-banner"
                        style={{ background: `url(${process.env.PUBLIC_URL + '/img/bg-product-list-page.jpg'}) fixed center top` }}
                    >

                        <BreadCrumb url={url} category={category} />

                        <div className="list-category clear row">
                            {this.showMenus(category, menus)}
                        </div>

                        {/* <ListFilter /> */}

                        {/* <div id="content" > */}
                        <div className="">
                            <ProductListFilter onSort={this.onSort} onFilterColor={this.onFilterColor} onFilterPrice={this.onFilterPrice} />
                            <ProductList category={category}>
                                {this.showProducts(category, products, sortBy, sortValue, filterColor, filterPrice)}
                            </ProductList>
                        </div>

                    </div>
                    <div className="clear" />
                    <Footer />
                </div>
            </Fragment>
        );
    }

    showMenus = (category, menus) => {
        let result = null;
        menus
            .filter(menu => menu.label.toLowerCase() === category)
            .map(menu => {
                result = menu.subCategory.map((sub, index) => {
                    return (
                        <div className="item col-md-4" key={index}>
                            <div className="category-image">
                                <Link to={sub.to} title={sub.label} className="hover-1" >
                                    <img src={sub.image} alt={sub.label} />
                                    <h2 className="name">{sub.label}</h2>
                                </Link>
                            </div>
                        </div>
                    )
                });
                return result;
            })
        return result;
    }

    showProducts = (category, products, sortBy, sortValue, filterColor, filterPrice) => {
        var result = null;
        // SORT function
        if (sortBy === 'name') {
            products.sort((a, b) => {
                if (a.name > b.name) return sortValue;
                else if (a.name < b.name) return -sortValue;
                else return 0;
            })
        } else if (sortBy === 'flashsale') {
            products = products.filter(product => product.isFlashsale)
        } else if (sortBy === 'hot') {
            products = products.filter(product => product.isHot)
        }
        // FILTER function
        if (filterColor) {
            products = products.filter(product => {
                switch (filterColor) {
                    case "black":
                        return product.colorArr.black
                    case "white":
                        return product.colorArr.white
                    case "red":
                        return product.colorArr.red
                    case "yellow":
                        return product.colorArr.yellow
                    case "blue":
                        return product.colorArr.blue
                    default:
                        return products
                }
            })
        }
        if (filterPrice) {
            switch (filterPrice) {
                case 1:
                    products = products.filter(product => {
                        return (product.price > 0 ? product.price : product.srp) < 1000000;
                    })
                    break;
                case 2:
                    products = products.filter(product => {
                        return (product.price > 0 ? product.price : product.srp) >= 1000000 && (product.price > 0 ? product.price : product.srp) <= 2000000;
                    })
                    break;
                case 3:
                    products = products.filter(product => {
                        return (product.price > 0 ? product.price : product.srp) >= 2000000 && (product.price > 0 ? product.price : product.srp) <= 5000000;
                    })
                    break;
                case 4:
                    products = products.filter(product => {
                        return (product.price > 0 ? product.price : product.srp) >= 5000000 && (product.price > 0 ? product.price : product.srp) <= 10000000;
                    })
                    break;
                case 5:
                    products = products.filter(product => {
                        return (product.price > 0 ? product.price : product.srp) > 10000000;
                    })
                    break;
                default:
                    return products
            }
        }
        // MAP products list
        result = products
            .filter(product => product.category.indexOf(category) !== -1)
            .map((product, index) => {
                return <ProductListItem
                    key={index}
                    product={product}
                    index={index}
                    onAddToCart={this.props.onAddToCart}
                />
            })
        return result;
    }
}

const mapStateToProps = state => {
    return {
        menus: state.menus,
        products: state.products,
        cart: state.cart
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchAllProducts: () => {
            dispatch(actFetchProductsRequest())
        },
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1))
            swal({
                title: Message.MSG_ADD_TO_CART_SUCCESS,
                text: "Di chuyển đến giỏ hàng ngay?",
                icon: "success",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        window.location = "/cart";
                    }
                });
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);