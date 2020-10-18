import React from "react";

export default function (item) {
  console.log('props', item);
  return (
    <div>
<ul>
            <li>
              <div className="second-item-container">
                <div className="post-img-wrapper">
                  <img src={item.img} alt="image" />
                </div>
                <div className="post-text-wrapper">
                  <h2>{item.title}</h2>
                  <h2>{item._id}</h2>
                  <h4> {item.description}</h4>
                  <div className="post-url-wrapper">
                    <a href={item.website} target="_blank">website</a>
                  </div>

                </div>

              </div>
            </li>
        </ul>
    </div>
  )
}
