import React, { Component } from 'react'

class Menu extends Component {
  render() {
    return (
      <div id="navarea">
        <nav className="navbar navbar-default" role="navigation">
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbar"
                aria-expanded="false"
                aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav custom_nav">
                <li className=""><a href="index.html">Home</a></li>
                <li className="dropdown">
                  <a href="#" className="" data-toggle="dropdown" role="button" aria-expanded="false">Archives</a>
                  <ul className="dropdown-menu" role="menu">
                    <li><a href="pages/archive-main.html">Archive</a></li>
                    <li><a href="pages/archive1.html">Archive 1</a></li>
                    <li><a href="pages/archive2.html">Archive 2</a></li>
                    <li><a href="pages/archive3.html">Archive 3</a></li>
                  </ul>
                </li>
                <li><a href="pages/single.html">Single page</a></li>
                <li><a href="pages/contact.html">Contact</a></li>
                <li><a href="pages/404.html">404 page</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Menu;
