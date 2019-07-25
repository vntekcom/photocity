import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

class Top extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div id="toolbar">
                    <span className="title">Hot News</span>
                </div>

                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={3}
                    totalSlides={2}
                    isPlaying={true}
                    interval={5000}
                >
                    <Slider>
                        <Slide index={0}>
                            <Link to="" className="text-info">
                                <i class="far fa-flag"></i> Zhiyun smooth 4 giảm giá sâu sập sàn!
                            </Link>
                        </Slide>
                        <Slide index={1}>
                            <Link to="" className="text-info">
                                <i class="far fa-flag"></i> Feiyu Vlog Pocket sản phẩm hót nhất 2019
                            </Link>
                        </Slide>
                    </Slider>
                </CarouselProvider>

                <div className="social">
                    <div className="in ico">
                        <Link to="/user/login" title="Đăng nhập">
                            <button type="button" className="btn btn-info"><i className="fas fa-user" /> Đăng nhập</button>
                        </Link>
                        {/* <Link to="/user/favorite" title="Sản phẩm yêu thích">
                            <i className="fa fa-heart" /> Yêu thích
                        </Link> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Top;