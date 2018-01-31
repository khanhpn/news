import React, { Component } from 'react'
import Image5 from 'images/5.jpg';
import Image6 from 'images/6.jpg';
import Image7 from 'images/7.jpg';
import Image8 from 'images/8.jpg';
import Image10 from 'images/10.jpg';
import Image11 from 'images/11.jpg';
import Image12 from 'images/12.jpg';
import Image13 from 'images/13.jpg';

class ContentTop extends Component {
  render() {
    return (
      <div className="content_top">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm6">
            <div className="latest_slider">
              <div className="slick_slider">
                <div className="single_iteam">
                  <img src={Image10} alt="" />
                  <h2>
                    <a className="slider_tittle" href="pages/single.html">Fusce eu nulla semper porttitor felis sit amet</a>
                  </h2>
                </div>
                <div className="single_iteam">
                  <img src={Image11} alt="" />
                  <h2>
                    <a className="slider_tittle" href="pages/single.html">Fusce eu nulla semper porttitor felis sit amet</a>
                  </h2>
                </div>
                <div className="single_iteam">
                  <img src={Image12} alt=""/>
                  <h2>
                    <a className="slider_tittle" href="pages/single.html">Fusce eu nulla semper porttitor felis sit amet</a>
                  </h2>
                </div>
                <div className="single_iteam">
                  <img src={Image13} alt=""/>
                  <h2>
                    <a className="slider_tittle" href="pages/single.html">Fusce eu nulla semper porttitor felis sit amet</a>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm6">
            <div className="content_top_right">
              <ul className="featured_nav wow fadeInDown">
                <li>
                  <img src={Image5} alt="" />
                  <div className="title_caption">
                    <a href="pages/single.html">Sed luctus semper odio aliquam rhoncus</a>
                  </div>
                </li>
                <li>
                  <img src={Image6} alt="" />
                  <div className="title_caption">
                    <a href="pages/single.html">Sed luctus semper odio aliquam rhoncus</a>
                  </div>
                </li>
                <li>
                  <img src={Image7} alt="" />
                  <div className="title_caption">
                    <a href="pages/single.html">Sed luctus semper odio aliquam rhoncus</a>
                  </div>
                </li>
                <li>
                  <img src={Image8} alt=""/>
                  <div className="title_caption">
                    <a href="pages/single.html">Sed luctus semper odio aliquam rhoncus</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContentTop;
