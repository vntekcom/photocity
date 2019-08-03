import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Route } from "react-router-dom";
import { actFetchMenusRequest } from './../actions/index';

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            var active = match ? 'hidden' : '';
            return (
                <li className={`has-child ${active}`}>
                    <Link to={to}>
                        {label}
                    </Link>
                </li>
            )
        }}
        />
    )
}

class Nav extends Component {

    componentDidMount() {
        this.props.fetchAllMenus();
    }

    render() {
        let { menus } = this.props;
        return (
            <nav id="nav-hori">
                <div id="nav-verti">
                    <ul className="primary">
                        {this.showMenu(menus)}
                    </ul>
                </div>
            </nav>
        );
    }

    showMenu = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.label}
                        to={menu.to}
                        activeOnlyWhenExact={menu.activeOnlyWhenExact}
                        subCategory={menu.subCategory}
                    />
                )
            })
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        menus: state.menus
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchAllMenus: () => {
            dispatch(actFetchMenusRequest())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav);