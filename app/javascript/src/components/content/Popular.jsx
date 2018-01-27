import React, { Component } from 'react'

class Popular extends Component {
  render() {
    return (
      <div className="single_bottom_rightbar">
                                        <ul role="tablist" className="nav nav-tabs custom-tabs">
                                          <li className="active" role="presentation">
                                            <a data-toggle="tab" role="tab" aria-controls="home" href="#mostPopular">Most Popular</a>
                                          </li>
                                          <li role="presentation">
                                            <a data-toggle="tab" role="tab" aria-controls="messages" href="#recentComent">Recent Comment</a>
                                          </li>
                                        </ul>
                                        <div className="tab-content">
                                          <div id="mostPopular" className="tab-pane fade in active" role="tabpanel">
                                            <ul className="small_catg popular_catg wow fadeInDown">
                                              <li>
                                                <div className="media wow fadeInDown">
                                                  <a className="media-left" href="#">
                                                    <img src="images/112x112.jpg" alt=""/></a>
                                                    <div className="media-body">
                                                      <h4 className="media-heading">
                                                        <a href="#">Duis condimentum nunc pretium lobortis
                                                        </a>
                                                      </h4>
                                                      <p>Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas
                                                        imperdiet nulla nisl quis mauris. Suspendisse a pharetra
                                                      </p>
                                                    </div>
                                                  </div>
                                                </li>
                                                <li>
                                                  <div className="media wow fadeInDown">
                                                    <a className="media-left" href="#">
                                                      <img src="images/112x112.jpg" alt=""/></a>
                                                      <div className="media-body">
                                                        <h4 className="media-heading">
                                                          <a href="#">Duis condimentum nunc pretium lobortis
                                                          </a>
                                                        </h4>
                                                        <p>Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas
                                                          imperdiet nulla nisl quis mauris. Suspendisse a pharetra
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </li>
                                                  <li>
                                                    <div className="media wow fadeInDown">
                                                      <a className="media-left" href="#">
                                                        <img src="images/112x112.jpg" alt=""/></a>
                                                        <div className="media-body">
                                                          <h4 className="media-heading">
                                                            <a href="#">Duis condimentum nunc pretium lobortis
                                                            </a>
                                                          </h4>
                                                          <p>Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas
                                                            imperdiet nulla nisl quis mauris. Suspendisse a pharetra
                                                          </p>
                                                        </div>
                                                      </div>
                                                    </li>
                                                  </ul>
                                                </div>
                                                <div id="recentComent" className="tab-pane fade" role="tabpanel">
                                                  <ul className="small_catg popular_catg">
                                                    <li>
                                                      <div className="media wow fadeInDown">
                                                        <a className="media-left" href="#">
                                                          <img src="images/112x112.jpg" alt=""/></a>
                                                          <div className="media-body">
                                                            <h4 className="media-heading">
                                                              <a href="#">Duis condimentum nunc pretium lobortis
                                                              </a>
                                                            </h4>
                                                            <p>Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas
                                                              imperdiet nulla nisl quis mauris. Suspendisse a pharetra
                                                            </p>
                                                          </div>
                                                        </div>
                                                      </li>
                                                      <li>
                                                        <div className="media wow fadeInDown">
                                                          <a className="media-left" href="#">
                                                            <img src="images/112x112.jpg" alt=""/></a>
                                                            <div className="media-body">
                                                              <h4 className="media-heading">
                                                                <a href="#">Duis condimentum nunc pretium lobortis
                                                                </a>
                                                              </h4>
                                                              <p>Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas
                                                                imperdiet nulla nisl quis mauris. Suspendisse a pharetra
                                                              </p>
                                                            </div>
                                                          </div>
                                                        </li>
                                                        <li>
                                                          <div className="media wow fadeInDown">
                                                            <a className="media-left" href="#">
                                                              <img src="images/112x112.jpg" alt=""/></a>
                                                              <div className="media-body">
                                                                <h4 className="media-heading">
                                                                  <a href="#">Duis condimentum nunc pretium lobortis
                                                                  </a>
                                                                </h4>
                                                                <p>Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas
                                                                  imperdiet nulla nisl quis mauris. Suspendisse a pharetra
                                                                </p>
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

export default Popular;
