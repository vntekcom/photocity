import React, { Component, Fragment } from 'react';
// import { Link } from 'react-router-dom';

class SlideHome extends Component {
    render() {
        return (
            <Fragment>
                <div id="carouselExampleIndicators" className="col-xs-12 col-sm-12 col-md-12 col-lg-12 pr-0 pl-0 carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={process.env.PUBLIC_URL + '/img/banner/master_slide_2.jpg'} alt="banner 1 photocity" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={process.env.PUBLIC_URL + '/img/banner/master_slide_1.jpg'} alt="banner 2 photocity" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={process.env.PUBLIC_URL + '/img/banner/master_slide_3.jpg'} alt="banner 3 photocity" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

                {/* <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 pr-0 pl-0 banner-img">
                    <Link to="/#" target="_self">
                        <img src={process.env.PUBLIC_URL + '/img/banner/banner_300x300.jpg'} alt="banner_300x300" height="393px" width="100%" />
                    </Link>
                </div> */}
            </Fragment>
        );
    }
}

export default SlideHome;