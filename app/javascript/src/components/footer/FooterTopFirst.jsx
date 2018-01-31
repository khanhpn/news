import React, { Component } from 'react'
import Image1 from 'images/1.jpg';

class FooterTopFirst extends Component {
  render() {
    return (
      <div className="col-lg-4 col-md-4 col-sm-4">
        <div className="single_footer_top wow fadeInLeft">
          <h2>Flicker Images</h2>
          <ul className="flicker_nav">
            <li>
              <a href="#"><img src={Image1} alt=""/></a>
            </li>
            <li>
              <a href="#"><img src={Image1} alt=""/></a>
            </li>
            <li>
              <a href="#"><img src={Image1} alt=""/></a>
            </li>
            <li>
              <a href="#"><img src={Image1} alt=""/></a>
            </li>
            <li>
              <a href="#"><img src={Image1} alt=""/></a>
            </li>
            <li>
              <a href="#"><img src={Image1} alt=""/></a>
            </li>
            <li>
              <a href="#"><img src={Image1} alt=""/></a>
            </li>
            <li>
              <a href="#"><img src={Image1} alt=""/></a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default FooterTopFirst;
