import React, { Component } from 'react'
import Image2 from 'images/2.jpg';
import Image9 from 'images/9.jpg';

export default class Technology extends Component {
  render() {
    return (
      <div className="technology_catrarea">
              <div className="single_category">
                <h2>
                  <span className="bold_line">
                    <span></span>
                  </span>
                  <span className="solid_line"></span>
                  <a className="title_text" href="#">Technology</a>
                </h2>
                <div className="business_category_left">
                  <ul className="fashion_catgnav wow fadeInDown">
                    <li>
                      <div className="catgimg2_container">
                        <a href="#"><img alt="" src={Image9}/></a>
                      </div>
                      <h2 className="catg_titile">
                        <a href="#">Aenean mollis metus sit amet ligula adipiscing</a>
                      </h2>
                      <div className="comments_box">
                        <span className="meta_date">14/12/2045</span>
                        <span className="meta_comment">
                          <a href="#">No Comments</a>
                        </span>
                        <span className="meta_more">
                          <a href="#">Read More...</a>
                        </span>
                      </div>
                      <p>Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas
                        imperdiet nulla...</p>
                    </li>
                  </ul>
                </div>
                              <div className="business_category_right">
                                <ul className="small_catg wow fadeInDown">
                                  <li>
                                    <div className="media wow fadeInDown">
                                      <a className="media-left" href="#">
                                        <img src={Image2} alt=""/></a>
                                        <div className="media-body">
                                          <h4 className="media-heading">
                                            <a href="#">Duis condimentum nunc pretium lobortis
                                            </a>
                                          </h4>
                                          <div className="comments_box">
                                            <span className="meta_date">14/12/2045</span>
                                            <span className="meta_comment">
                                              <a href="#">No Comments</a>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="media wow fadeInDown">
                                        <a className="media-left" href="#">
                                          <img src={Image2} alt=""/></a>
                                          <div className="media-body">
                                            <h4 className="media-heading">
                                              <a href="#">Duis condimentum nunc pretium lobortis
                                              </a>
                                            </h4>
                                            <div className="comments_box">
                                              <span className="meta_date">14/12/2045</span>
                                              <span className="meta_comment">
                                                <a href="#">No Comments</a>
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="media wow fadeInDown">
                                          <a className="media-left" href="#">
                                            <img src={Image2} alt=""/></a>
                                            <div className="media-body">
                                              <h4 className="media-heading">
                                                <a href="#">Duis condimentum nunc pretium lobortis
                                                </a>
                                              </h4>
                                              <div className="comments_box">
                                                <span className="meta_date">14/12/2045</span>
                                                <span className="meta_comment">
                                                  <a href="#">No Comments</a>
                                                </span>
                                              </div>
                                            </div>
                                          </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
