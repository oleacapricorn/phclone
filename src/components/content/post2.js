import React from "react";

export default function (props) {
  console.log('props', props);
  return (
    <div>
      <ul>
        <div className="test">
          <li className="second-item-container">
            <div className="post-img-wrapper">
              <img src={props.img} alt="image" />
            </div>
            <div className="post-text-wrapper">
              <h2>{props.title}</h2>
              <h4> {props.description}</h4>
              <div className="post-url-wrapper">
                <a href={props.website} target="_blank">website</a>
              </div>

            </div>

            <div className="post-btn-wrapper">
            <button className="upvote-count"> {props.upvotes == 'undefined' ? 0 : props.upvotes}  </button> <button type="submit" className="btn-Upvote"> upvote </button>
            </div>

          </li>
        </div>

      </ul>
    </div>
  );
}
