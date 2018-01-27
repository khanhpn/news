import React, { Component } from 'react'
import FooterTopFirst from './FooterTopFirst';
import FooterTopLast from './FooterTopLast';

class FooterTop extends Component {
  render() {
    return (
      <div className="footer_top">
        <div className="container">
          <div className="row">
            <FooterTopFirst />
            <FooterTopLast />
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="single_footer_top wow fadeInRight">
                <h2>About Us</h2>
                <p>Iorci, eget ullamcorper quam. Phasellus lorem neque</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FooterTop;
