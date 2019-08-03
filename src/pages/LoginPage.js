import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// IMPORT COMPONENTS
import Top from '../components/Top';
import Banner from '../components/Banner';
import Nav from '../components/Nav';
import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer';

class LoginPage extends Component {
    render() {
        let { cart } = this.props;
        return (
            <Fragment>
                <div className="container-fluid" id="wrapper">
                    <div className="header">
                        <Top />
                        <Banner cart={cart} />
                        <Nav />
                    </div>

                    <LoginForm />
                    
                    <Footer />
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}
export default connect(mapStateToProps) (LoginPage);
