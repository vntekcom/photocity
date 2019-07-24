import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Route } from "react-router-dom";

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
    render() {
        let { menus } = this.props;
        // console.log(menus)
        return (
            <nav id="nav-hori">
                <div className="container">
                    <div id="nav-verti">
                        <ul className="primary">
                            {this.showMenu(menus)}
                        </ul>
                    </div>
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

export default connect(mapStateToProps)(Nav);