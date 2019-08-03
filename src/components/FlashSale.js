import React, { Component } from 'react';

class FlashSale extends Component {
    render() {
        return (
            <div className="top-product-home product-list">
                <div className="flash-sale box fr">
                    <span className="label">
                        <i className="fas fa-bolt fa-2x"></i>
                    </span>
                    <div className="title robot">
                        <span>Flash sale</span>
                    </div>

                    <div className="wait-product-list">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default FlashSale;