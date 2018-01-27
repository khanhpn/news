import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Header from '../src/components/header/Header';
import Menu from '../src/components/menu/Menu';
import Content from '../src/components/content/Content';
import Footer from '../src/components/footer/Footer';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Menu />
        <Content />
        <Footer />
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home name="React" />,
    document.body.appendChild(document.createElement('div')),
  )
})
