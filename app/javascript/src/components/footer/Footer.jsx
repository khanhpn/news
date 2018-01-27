import React, { Component } from 'react'
import FooterBottom from './FooterBottom';
import FooterTop from './FooterTop';

class Footer extends Component {
  render() {
    return (
      <footer id="footer" >
        <FooterTop />
        <FooterBottom />
      </footer>
    )
  }
}

export default Footer;
