import React, { Component } from 'react'
import Business from './Business';
import Fashion from './Fashion';
import Technology from './Technology';
import RecentPost from './RecentPost';
import Popular from './Popular';
import BlogArchive from './BlogArchive';
import PopularLink from './PopularLink';

class ContentBottom extends Component {
  render() {
    return (
      <div className="content_bottom">
        <div className="col-lg-8 col-md-8">
          <div className="content_bottom_left">
            <Business />
            <Fashion />
            <Technology />
          </div>
        </div>
        <div className="col-lg-4 col-md-4">
          <div className="content_bottom_right">
            <RecentPost />
            <Popular />
            <BlogArchive />
            <PopularLink />
          </div>
        </div>
      </div>
    )
  }
}

export default ContentBottom;
