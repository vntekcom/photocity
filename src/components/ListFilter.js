import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Filter extends Component {
    render() {
        return (

            <div id="col-left">
                <div className="box-left">
                    <div className="content-box-left att-list att-list-2">
                        <div className="title-box-left">
                            <span className="title">Lọc sản phẩm</span>
                            <div className="clear" />
                        </div>
                        <div className="clear" />
                        <div className="att-title">Màu Sắc</div>
                        <div className="slimScrollDiv" style={{ position: 'relative', overflow: 'hidden', width: 'auto', height: '315px' }}>
                            <ul className="ul" style={{ overflow: 'hidden', width: 'auto', height: '315px' }}>
                                <li>
                                    <Link to="/">
                                        <i className="fa fa-square-o" /> Red
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <i className="fa fa-square-o" /> Gray
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <i className="fa fa-square-o" /> Blue
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <i className="fa fa-square-o" /> Twilight Red
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <i className="fa fa-square-o" /> Grayish Black
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <i className="fa fa-square-o" /> Pale Gold
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <i className="fa fa-square-o" /> Moonlit Blue
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <i className="fa fa-square-o" /> Horizon Green
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <i className="fa fa-square-o" /> Gold
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <i className="fa fa-square-o" /> Đỏ
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <i className="fa fa-square-o" /> Silver
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <i className="fa fa-square-o" /> Black
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <i className="fa fa-square-o" /> Trắng
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <i className="fa fa-square-o" /> Đỏ đậm
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <i className="fa fa-square-o" /> Xanh Da Trời
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <i className="fa fa-square-o" /> Xanh lá
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <i className="fa fa-square-o" /> Xám
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <i className="fa fa-square-o" /> Đen
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="clear" />

                        <div className="att-title">TÌM THEO GIÁ</div>
                        <ul className="ul">
                            <li>
                                <Link to="/">
                                    <i className="fa fa-square-o" /> Dưới 1 triệu
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <i className="fa fa-square-o" /> 1 triệu - 2 triệu
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <i className="fa fa-square-o" /> 2 triệu - 4 triệu
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <i className="fa fa-square-o" /> Dưới 5 triệu
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <i className="fa fa-square-o" /> 4 triệu - 8 triệu
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <i className="fa fa-square-o" /> 5 triệu - 20 triệu
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <i className="fa fa-square-o" /> 20 triệu - 40 triệu
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <i className="fa fa-square-o" /> Trên 40 triệu
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <i className="fa fa-square-o" /> Trên 50 triệu
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Filter;