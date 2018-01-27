import React, { Component } from 'react'

class ContentTop extends Component {
  render() {
    return (
      <div className="content_top">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm6">
            <div className="latest_slider">
              <div className="slick_slider">
                <div className="single_iteam">
                  <img src="images/550x330x1.jpg" alt="" />
                  <h2>
                    <a className="slider_tittle" href="pages/single.html">Fusce eu nulla semper porttitor felis sit amet</a>
                  </h2>
                </div>
                <div className="single_iteam">
                  <img src="images/550x330x2.jpg" alt="" />
                  <h2>
                    <a className="slider_tittle" href="pages/single.html">Fusce eu nulla semper porttitor felis sit amet</a>
                  </h2>
                </div>
                <div className="single_iteam">
                  <img src="images/550x330x3.jpg" alt=""/>
                  <h2>
                    <a className="slider_tittle" href="pages/single.html">Fusce eu nulla semper porttitor felis sit amet</a>
                  </h2>
                </div>
                <div className="single_iteam">
                  <img src="images/550x330x4.jpg" alt=""/>
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
                  <img src="images/300x215x1.jpg" alt="" />
                  <div className="title_caption">
                    <a href="pages/single.html">Sed luctus semper odio aliquam rhoncus</a>
                  </div>
                </li>
                <li>
                  <img src="images/300x215x2.jpg" alt="" />
                  <div className="title_caption">
                    <a href="pages/single.html">Sed luctus semper odio aliquam rhoncus</a>
                  </div>
                </li>
                <li>
                  <img src="images/300x215x3.jpg" alt="" />
                  <div className="title_caption">
                    <a href="pages/single.html">Sed luctus semper odio aliquam rhoncus</a>
                  </div>
                </li>
                <li>
                  <img src="images/300x215x4.jpg" alt=""/>
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
