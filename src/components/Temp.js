import React, { Component, Fragment } from 'react';

class Temp extends Component {
    render() {
        return (
            <Fragment>
                <div id="modal" className="modal-quick">
                    <form id="frmCatQuickOrder_frm" className="form-inline validate" method="post">
                        <div className="modal_nt">
                            <div className="modal_nt1">
                                <div className="modal_text text-center">
                                    <p className="txt_18">
                                        <span className="p1">Bạn đang xem sản phẩm:</span>
                                        <span className="p2">Loa Sony SRS-XB12</span>
                                    </p>
                                    <p className="p3">
                                        <i>Vui lòng điền các thông tin bên dưới để chúng tôi liên hệ với bạn !</i>
                                    </p>
                                </div>
                                <div className="clear space10px" />
                                <div className="frm_md cart-left">
                                    <div className="form-group">
                                        <input name="customerName" type="text" className="validate[required]  form-control" placeholder="Nhập Tên của bạn" />
                                    </div>
                                    <div className="form-group">
                                        <input name="customerMobile" type="text" className="validate[required,custom[phone]]  form-control" placeholder="Nhập Điện thoại của bạn" />
                                    </div>
                                    <div className="form-group">
                                        <input name="customerEmail" type="text" className="validate[required,custom[email]]  form-control" placeholder="Nhập Email của bạn" />
                                    </div>
                                    <div className="form-group">
                                        <textarea name="description" className="form-control" placeholder="Yêu cầu khác" defaultValue={""} />
                                    </div>
                                    <div className="clear space10px" />
                                    <div className="form-group text-center">
                                        <input id="btnQuick" className="btn_ft3 btn btn-primary" type="button" defaultValue="Gửi" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

            </Fragment>
        );
    }
}

export default Temp;
