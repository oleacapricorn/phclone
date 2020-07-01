import React from "react";

import UpvoteBtn from "../content/upvote-button";

export default function (props) {
  return (
    <div>
      <ul>
        <li className="one-item-container">
          <div className="post-img-wrapper">
            <img src={props.img} alt="image" />
          </div>
          <div className="post-text-wrapper">
            <h3>{props.title}</h3>
            <h4>{props.description}</h4>
            <h5>🗓 {props.date}</h5>

            <div className="post-url-wrapper"></div>
          </div>

         <div className="post-btn-wrapper">
         <UpvoteBtn />
         {/* <h5>💬 {props.comments}</h5> */}

         <a href={props.website} target="_blank">Website</a>

         {/* <a href={props.url} target="_blank">See Post</a> */}
         </div>
        </li>
      </ul>
    </div>
  );
}