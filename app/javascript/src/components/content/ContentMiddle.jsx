import React, { Component } from 'react'
import Image3 from 'images/3.jpg';
import Image4 from 'images/4.jpg';
import Image14 from 'images/14.jpg';
import Image15 from 'images/15.jpg';
import Image16 from 'images/16.jpg';

class ContentMiddle extends Component {
  render() {
    return (
      <div className="content_middle">
        <div className="col-lg-3 col-md-3 col-sm-3">
          <div className="content_middle_leftbar">
            <div className="single_category wow fadeInDown">
              <h2>
                <span className="bold_line">
                  <span></span>
                </span>
                <span className="solid_line"></span>
                <a href="#" className="title_text">category1</a>
              </h2>
              <ul className="catg1_nav">
                <li>
                  <div className="catgimg_container">
                    <a href="pages/single.html" className="catg1_img">
                      <img alt="" src={Image3} />
                    </a>
                  </div>
                  <h3 className="post_titile">
                    <a href="pages/single.html">Vestibulum ut est augue, in varius</a>
                  </h3>
                </li>
                <li>
                  <div className="catgimg_container">
                    <a href="pages/single.html" className="catg1_img">
                      <img alt="" src={Image4} />
                    </a>
                  </div>
                  <h3 className="post_titile">
                    <a href="pages/single.html">Vestibulum ut est augue, in varius</a>
                  </h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div className="content_middle_middle">
            <div className="slick_slider2">
              <div className="single_featured_slide">
                <a href="pages/single.html">
                  <img src={Image14} alt="" />
                </a>
                <h2>
                  <a href="pages/single.html">Praesent vitae quam vitae arcu posuer 1</a>
                </h2>
                <p>Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas
                  imperdiet nulla nisl quis mauris. Suspendisse a pharetra urna. Morbi dui lectus,
                  pharetra nec elementum eget, vulput...</p>
              </div>
              <div className="single_featured_slide">
                <a href="pages/single.html">
                  <img src={Image15} alt=""/>
                </a>
                <h2>
                  <a href="#">Praesent vitae quam vitae arcu posuer 2</a>
                </h2>
                <p>Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas
                  imperdiet nulla nisl quis mauris. Suspendisse a pharetra urna. Morbi dui lectus,
                  pharetra nec elementum eget, vulput...</p>
              </div>
              <div className="single_featured_slide">
                <a href="pages/single.html">
                  <img src={Image16} alt="" />
                </a>
                <h2>
                  <a href="#">Praesent vitae quam vitae arcu posuer 3</a>
                </h2>
                <p>Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas
                    imperdiet nulla nisl quis mauris. Suspendisse a pharetra urna. Morbi dui lectus,
                    pharetra nec elementum eget, vulput...</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3">
          <div className="content_middle_rightbar">
            <div className="single_category wow fadeInDown">
              <h2>
                <span className="bold_line">
                  <span></span>
                </span>
                <span className="solid_line"></span>
                <a href="#" className="title_text">category2</a>
              </h2>
              <ul className="catg1_nav">
                <li>
                  <div className="catgimg_container">
                    <a href="pages/single.html" className="catg1_img">
                      <img alt="" src={Image3} />
                    </a>
                  </div>
                  <h3 className="post_titile">
                    <a href="pages/single.html">Vestibulum ut est augue, in varius</a>
                  </h3>
                </li>
                <li>
                  <div className="catgimg_container">
                    <a href="pages/single.html" className="catg1_img">
                      <img alt="" src={Image4} />
                    </a>
                  </div>
                  <h3 className="post_titile">
                    <a href="pages/single.html">Vestibulum ut est augue, in varius</a>
                  </h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContentMiddle;
