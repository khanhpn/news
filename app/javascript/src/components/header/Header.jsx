import React, { Component } from 'react'
import addbanner from '../../../images/addbanner_728x90_V1.jpg';

class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="header_top">
              <div className="header_top_left">
                <ul className="top_nav">
                  <li><a href="index.html">Home</a></li>
                  <li><a href="pages/page.html">About</a></li>
                  <li><a href="pages/contact.html">Contact</a></li>
                  <li><a href="pages/404.html">Error Page</a></li>
                </ul>
              </div>
              <div className="header_top_right">
                <form action="#" className="search_form">
                  <input type="text" placeholder="Text to Search" />
                  <input type="submit" value="" />
                </form>
              </div>
            </div>
            <div className="header_bottom">
              <div className="header_bottom_left">
                <a className="logo" href="index.html">mag<strong>Express</strong>
                  <span>A Pro Magazine Template</span>
                </a>
              </div>
              <div className="header_bottom_right">
                <a href="#"><img src="{addbanner}" alt="" /></a>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
