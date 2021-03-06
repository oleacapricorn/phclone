import React from "react";

export default function (props) {
  return (
    <ul>
      <li className="one-item-container">
        <div className="post-img-wrapper">
          <a href={props.website}>
          <img src={props.img} alt="image" />
          </a>
        </div>

        <div className="post-text-wrapper">
          <div className="post-title">
            <h2>{props.title}</h2>
          </div>
          <h4>{props.description}</h4>
          <div className="post-url-wrapper">
            <a href={props.website} target="_blank">website</a>
          </div>

          {/* <div className="post-url-wrapper">
           <h4>{props.created_at}</h4>
          </div> */}

        </div>
        <div className="upvotes-count">
          <p>⬆️</p>
          <h5>{props.upvotes}</h5>
        </div>
      </li>
    </ul>

  );
}