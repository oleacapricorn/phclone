import React from "react";
import axios from "axios";

export default function (props) {
    
  // function handleClick(props) {
  //   console.log('props', props);
  //   const url_temp_prefix = 'https://cors-anywhere.herokuapp.com/';
  //   const url = `${url_temp_prefix}https://phclone-24db.restdb.io/rest/posts/${props._id}`;
  //   const currentUpvotes = props.upvotes;
  //   const newUpvotes = currentUpvotes + 1;
  
  //   var jsondata = { 'upvotes': newUpvotes };
  
  //   console.log('CurrentVotes', currentUpvotes);
  //   console.log('new json', jsondata);
  
  //   var settings = {
  //     "async": true,
  //     "crossDomain": true,
  //     "headers": {
  //       "content-type": "application/json",
  //       "x-apikey": "ce3aeba14a46f6ed8d4183a4af9c099299d75",
  //       "cache-control": "no-cache"
  //     },
  //     "processData": false,
  //   }
  //   axios.put(url, jsondata, settings)
  //     .then(response => {
  //       console.log('request response', response.data);
  //       this.setState({
  //         data: response.data
  //       }
  //       )
  //     })
  //     .catch(error => {
  //       console.log('error', error);
  //     });
  // }
    
  return (
        <div className="db-post-list">
        <ul>
          <li>
            <div className="second-item-container">
              <div className="post-img-wrapper">
                <img src={props.img} alt="image" />
              </div>
              <div className="post-text-wrapper">
                <h2>{props.title}</h2>
                <h2>{props._id}</h2>
                <h4> {props.description}</h4>
                <div className="post-url-wrapper">
                  <a href={props.website} target="_blank">website</a>
                </div>
              </div>
              {/* <div className="post-btn-wrapper">
                <button className="upvote-count">
                  {props.upvotes == 'undefined' ? 0 : props.upvotes}
                </button>
    
                <button className="btn-Upvote" 
                  onClick={handleClick}
                > upvote
          </button>
              </div> */}
            </div>
    
            </li>
        </ul>
        </div>
    
      );
    }
