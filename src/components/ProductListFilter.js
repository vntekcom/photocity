import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as Color from './../constants/Color';
import * as Sort from './../constants/Sort';

class ProductListFilter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterPrice: {
                name: '',
                value: 0,
                label: 'Lọc theo giá'
            },
            filterColor: {
                name: '',
                value: '',
                label: 'Lọc theo màu'
            },
            sort: {
                by: 'name',
                value: 1,
                label: 'Sắp xếp'
            }
        }
        this.initialState = { ...this.state }
    }

    onClick = (sortBy, sortValue, sortLabel) => {
        this.setState({
            sort: {
                by: sortBy,
                value: sortValue,
                label: sortLabel
            }
        }, () => {
            this.props.onSort(this.state.sort)
        })
    }

    onFilterColor = (name, value, label) => {
        this.setState({
            filterColor: {
                name,
                value,
                label
            }
        }, () => {
            // console.log(this.state.filterColor)
            this.props.onFilterColor(this.state.filterColor)
        })
    }

    onFilterPrice = (name, value, label) => {
        this.setState({
            filterPrice: {
                name,
                value,
                label
            }
        }, () => {
            this.props.onFilterPrice(this.state.filterPrice)
        })
    }

    render() {
        let { sort, filterColor, filterPrice } = this.state;
        return (
            <div className="list-tools">
                <div className="clear space10px" />
                <div className="pull-right">
                {/* SORT */}
                <div className="sort_pro">
                        <span>
                            {this.state.sort.label}
                            <i className="fas fa-sort-amount-down-alt" />
                        </span>
                        <ul>
                            <li onClick={() => this.onClick('name', 1, 'Sắp xếp')}>
                                <Link to="#"><i className="fas fa-eraser" /></Link>
                            </li>
                            <li onClick={() => this.onClick('flashsale', 1, `${Sort.FLASH_SALE}`)}>
                                <Link to="#" className={(sort.by === 'flashsale' && sort.value === 1) ? 'text-danger' : ''}>{Sort.FLASH_SALE}</Link>
                            </li>
                            <li onClick={() => this.onClick('hot', 1, `${Sort.HOT}`)}>
                                <Link to="#" className={(sort.by === 'hot' && sort.value === 1) ? 'text-danger' : ''}>{Sort.HOT}</Link>
                            </li>
                            <li onClick={() => this.onClick('price', 1, `${Sort.PRICE_UP}`)}>
                                <Link to="#" className={(sort.by === 'price' && sort.value === 1) ? 'text-danger' : ''}>{Sort.PRICE_UP}</Link>
                            </li>
                            <li onClick={() => this.onClick('price', -1, `${Sort.PRICE_DOWN}`)}>
                                <Link to="#" className={(sort.by === 'price' && sort.value === -1) ? 'text-danger' : ''}>{Sort.PRICE_DOWN}</Link>
                            </li>
                            <li onClick={() => this.onClick('name', 1, `${Sort.NAME_AZ}`)} >
                                <Link to="#" className={(sort.by === 'name' && sort.value === 1) ? 'text-danger' : ''}>{Sort.NAME_AZ}</Link>
                            </li>
                            <li onClick={() => this.onClick('name', -1, `${Sort.NAME_ZA}`)}>
                                <Link to="#" className={(sort.by === 'name' && sort.value === -1) ? 'text-danger' : ''}>{Sort.NAME_ZA}</Link>
                            </li>
                        </ul>
                    </div>
                    
                    {/* FILTER PRICE */}
                    <div className="sort_pro">
                        <span>
                            {this.state.filterPrice.label}
                            <i className="fas fa-sort-amount-down-alt" />
                        </span>
                        <ul>
                            <li onClick={() => this.onFilterPrice('price', 0, 'Lọc theo giá')}>
                                <Link to="#"><i className="fas fa-eraser" /></Link>
                            </li>
                            <li onClick={() => this.onFilterPrice('price', 1, 'Dưới 1 triệu')}>
                                <Link to="#" className={(filterPrice.name === 'color' && filterPrice.value === 1) ? 'text-danger' : ''}>Dưới 1 triệu</Link>
                            </li>
                            <li onClick={() => this.onFilterPrice('price', 2, 'Từ 1-2 triệu')}>
                                <Link to="#" className={(filterPrice.name === 'color' && filterPrice.value === 2) ? 'text-danger' : ''}>Từ 1-2 triệu</Link>
                            </li>
                            <li onClick={() => this.onFilterPrice('price', 3, 'Từ 2-5 triệu')} >
                                <Link to="#" className={(filterPrice.name === 'color' && filterPrice.value === 3) ? 'text-danger' : ''}>Từ 2-5 triệu</Link>
                            </li>
                            <li onClick={() => this.onFilterPrice('price', 4, 'Từ 5-10 triệu')}>
                                <Link to="#" className={(filterPrice.name === 'color' && filterPrice.value === 4) ? 'text-danger' : ''}>Từ 5-10 triệu</Link>
                            </li>
                            <li onClick={() => this.onFilterPrice('price', 5, 'Trên 10 triệu')}>
                                <Link to="#" className={(filterPrice.name === 'color' && filterPrice.value === 5) ? 'text-danger' : ''}>Trên 10 triệu</Link>
                            </li>
                        </ul>
                    </div>

                    {/* FILTER COLOR */}
                    <div className="sort_pro">
                        <span>
                            {this.state.filterColor.label}
                            <i className="fas fa-sort-amount-down-alt" />
                        </span>
                        <ul>
                            <li onClick={() => this.onFilterColor('color', 0, 'Lọc theo màu')}>
                                <Link to="#"><i className="fas fa-eraser" /></Link>
                            </li>
                            <li onClick={() => this.onFilterColor('color', 'black', `${Color.BLACK}`)}>
                                <Link to="#" className={(filterColor.name === 'color' && filterColor.value === 'black') ? 'text-danger' : ''}>{Color.BLACK}</Link>
                            </li>
                            <li onClick={() => this.onFilterColor('color', 'white', `${Color.WHITE}`)}>
                                <Link to="#" className={(filterColor.name === 'color' && filterColor.value === 'white') ? 'text-danger' : ''}>{Color.WHITE}</Link>
                            </li>
                            <li onClick={() => this.onFilterColor('color', 'red', `${Color.RED}`)} >
                                <Link to="#" className={(filterColor.name === 'color' && filterColor.value === 'red') ? 'text-danger' : ''}>{Color.RED}</Link>
                            </li>
                            <li onClick={() => this.onFilterColor('color', 'blue', `${Color.BLUE}`)} >
                                <Link to="#" className={(filterColor.name === 'color' && filterColor.value === 'blue') ? 'text-danger' : ''}>{Color.BLUE}</Link>
                            </li>
                            <li onClick={() => this.onFilterColor('color', 'yellow', `${Color.YELLOW}`)} >
                                <Link to="#" className={(filterColor.name === 'color' && filterColor.value === 'yellow') ? 'text-danger' : ''}>{Color.YELLOW}</Link>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="sapxep_list">
                        <div className="sapxep fl">
                            <Link to="#" className="set-display-option current">
                                <i className="fas fa-th"></i>
                            </Link>
                            {/* <Link to="#" className="set-display-option ">
                                <i className="fas fa-list"></i>
                            </Link> */}
                        </div>
                    </div>
                </div>

                <div className="clear space10px" />

            </div>
        );
    }
}

export default ProductListFilter;