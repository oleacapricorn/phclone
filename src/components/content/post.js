import React from "react";


export default function (props) {
  return (
    <div>
      <ul>
        <li className="one-item-container">
          {/* <div className="post-img-wrapper">
            <img src={props.img} alt="image" />
          </div> */}
          <div className="post-text-wrapper">
            <div className="post-title">
              <h2>{props.title}</h2>
            </div>
            <h4> {props.description}</h4>
          </div>
          <div className="post-title">
            <div className="post-btn-wrapper">
              <button className="upvote-count"> {props.upvotes == 'undefined' ? 0 : props.upvotes}  </button> <button type="submit" className="btn-Upvote"> upvote </button>
            </div>
            <div className="post-url-wrapper">
              <a href={props.website} target="_blank">website</a>
            </div>
          </div>

        </li>
      </ul>
    </div>
  );
}
