import React from "react";

import UpvoteBtn from "../content/upvote-button";

export default function (props) {
  return (
    <div>
      <ul>
        <div className="test">
        <li className="second-item-container">
          {/* <div className="post-img-wrapper">
            <img src={props.img} alt="image" />
          </div> */}
          <div className="post-text-wrapper">
            <h2>{props.title}</h2>
            <h4> {props.description}</h4>
            <h5> ⬆️ {props.upvotes} upvotes</h5>
          </div>
          <div className="post-bottom">
          <div className="post-url-wrapper">
              <a href={props.website} target="_blank">Website</a>
            </div>
              <div className="post-btn-wrapper">
                  <UpvoteBtn />
                </div>
            </div>

        </li>
        </div>

      </ul>
    </div>
  );
}