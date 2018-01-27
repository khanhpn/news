import React, { Component } from 'react'

class FooterBottom extends Component {
  render() {
    return (
      <div className="footer_bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="footer_bottom_left">
                <p>Copyright &copy; 2018</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="footer_bottom_right">
                <p>Developed BY bkpro</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FooterBottom;
