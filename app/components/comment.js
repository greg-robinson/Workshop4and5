import React from 'react';
import {unixTimeToString} from '/home/gregoire/Documents/CS 326/Workshop6/app/util.js';
import {Link} from 'react-router';

export default class Comment extends React.Component {
  render() {
    return (
      <div>
        <div className="media-left media-top">
          PIC
        </div>
        <div className="media-body">
          <Link to={"/profile/" + this.props.author._id}>{this.props.author.fullName}</Link> {this.props.children}
          <br /><a href="#">Like</a> · <a href="#">Reply</a> ·
            {unixTimeToString(this.props.postDate)}
        </div>
      </div>
    )
  }
}
