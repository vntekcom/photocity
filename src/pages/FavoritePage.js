import React, { Component, Fragment } from 'react';
// IMPORT COMPONENTS
import Top from '../components/Top';
import Banner from '../components/Banner';
import Nav from '../components/Nav';
import SlideHome from '../components/SlideHome';
import Footer from '../components/Footer';

class FavoritePage extends Component {
    render() {
        return (
            <Fragment>
                <div className="container-fluid" id="wrapper">
                    <div className="header">
                        <Top />
                        <Banner />
                        <Nav />
                        <SlideHome />
                    </div>
                    <h1>FavoritePage</h1>
                    <Footer />
                </div>
            </Fragment>
        );
    }
}

export default FavoritePage;