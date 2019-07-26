import React, { Component, Fragment } from 'react';
// IMPORT COMPONENTS
import Top from '../components/Top';
import Banner from '../components/Banner';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

class LoginPage extends Component {
    render() {
        return (
            <Fragment>
                <div className="container-fluid" id="wrapper">
                    <div className="header">
                        <Top />
                        <Banner />
                        <Nav />
                    </div>
                    <h1>LOGIN</h1>
                    <Footer />
                </div>
            </Fragment>
        );
    }
}

export default LoginPage;
