import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends Component {
    render() {
        return (
            <Fragment>
                <div className="txt_b text-30 txt_u space10px h30">ĐĂNG NHẬP</div>

                <div id="fake-loginForm">
                    <input className="input" type="text" size={40} id="fake-email" placeholder="Tên đăng nhập" />
                    <div className="error error-email" />
                    <input className="input" type="password" size={40} id="fake-password" placeholder="Mật khẩu" />
                    <div className="error error-password" />
                    <Link to="/" className="btn btn-red txt_u">Đăng ký</Link>
                    <Link to="/" className="btn btn-blue txt_u fr">Đăng nhập</Link>
                </div>

                <div className="clear text-center" style={{ padding: '20px 0 30px' }}>
                    <Link to="/" className="text-blue">(Quên mật khẩu?)</Link>
                </div>
            </Fragment>
        );
    }
}

export default LoginForm;