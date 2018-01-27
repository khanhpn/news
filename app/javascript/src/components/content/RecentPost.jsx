import React, { Component } from 'react'

class RecentPost extends Component {
  render() {
    return (
      <div className="single_bottom_rightbar">
        <h2>Recent Post</h2>
        <ul className="small_catg popular_catg wow fadeInDown">
          <li>
            <div className="media wow fadeInDown">
              <a href="#" className="media-left"><img alt="" src="images/112x112.jpg"/></a>
              <div className="media-body">
                <h4 className="media-heading"><a href="#">Duis condimentum nunc pretium lobortis</a></h4>
                <p>Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas
                  imperdiet nulla nisl quis mauris. Suspendisse a pharetra
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="media wow fadeInDown">
              <a href="#" className="media-left"><img alt="" src="images/112x112.jpg"/></a>
              <div className="media-body">
                <h4 className="media-heading"><a href="#">Duis condimentum nunc pretium lobortis</a></h4>
                <p>Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas
                  imperdiet nulla nisl quis mauris. Suspendisse a pharetra
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="media wow fadeInDown">
              <a href="#" className="media-left"><img alt="" src="images/112x112.jpg"/></a>
              <div className="media-body">
                <h4 className="media-heading"><a href="#">Duis condimentum nunc pretium lobortis</a></h4>
                <p>Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas
                  imperdiet nulla nisl quis mauris. Suspendisse a pharetra
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default RecentPost;
