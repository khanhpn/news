import React, { Component } from 'react'

export default class BlogArchive extends Component {
  render() {
    return (
      <div className="single_bottom_rightbar">
        <h2>Blog Archive</h2>
        <div className="blog_archive wow fadeInDown">
          <form action="#">
            <select>
              <option value="">Blog Archive</option>
              <option value="">October(20)</option>
            </select>
          </form>
        </div>
      </div>
    )
  }
}
