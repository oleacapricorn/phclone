import React from "react";

export default function (props) {
  return (
    <ul>
      <li className="one-item-container">

        <div className="post-img-wrapper">
          <img src={props.img} alt="image" />
        </div>

        <div className="post-text-wrapper">
          <h2>{props.title}</h2>
          <h4>{props.description}</h4>

          <div className="post-bottom">

            <div className="post-url-wrapper">
              <a href={props.website} target="_blank">Website</a>
            </div>
            <div className="post-btn-wrapper">
              <h5> ⬆️ {props.upvotes} upvotes</h5>
            </div>

          </div>


        </div>


      </li>
    </ul>

  );
}