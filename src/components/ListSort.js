import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListSort extends Component {
    render() {
        return (
            <div className="list-tools">
                <div className="clear space10px" />
                <div className="pull-right">
                    <div className="sort_pro">
                        Sắp xếp:
                            <span>
                            Mới nhất <i className="fas fa-sort-amount-down-alt"></i>
                        </span>
                        <ul>
                            <li>
                                <Link to="/" rel="nofollow">Mới nhất</Link>
                            </li>
                            <li>
                                <Link to="/" rel="nofollow">Giá tăng dần</Link>
                            </li>
                            <li>
                                <Link to="/" rel="nofollow">Giá giảm dần</Link>
                            </li>
                            <li>
                                <Link to="/" rel="nofollow">Bán chạy nhất</Link>
                            </li>
                            <li>
                                <Link to="/" rel="nofollow">A → Z</Link>
                            </li>
                            <li>
                                <Link to="/" rel="nofollow">Z → A</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="sapxep_list">
                        <span className="fl">Chế độ xem:</span>
                        <div className="sapxep fl">
                            <Link to="/" className="set-display-option current">
                                <i className="fas fa-th"></i>
                            </Link>
                            <Link to="/" className="set-display-option ">
                                <i className="fas fa-list"></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="clear space10px" />
            </div>
        );
    }
}

export default ListSort;