import React, { Component } from 'react'
import ContentTop from './ContentTop';
import ContentMiddle from './ContentMiddle';
import ContentBottom from './ContentBottom';

class Content extends Component {
  render() {
    return (
      <section id="mainContent">
        <ContentTop />
        <ContentMiddle />
        <ContentBottom />
      </section>
    )
  }
}

export default Content;
