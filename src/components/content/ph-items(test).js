import React, { Component } from "react";
import axios from "axios";

// import Post from "./post2"

class DBItemsContainer2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };

    this.handleClick = this.handleClick.bind(this);
    this.getDBItems = this.getDBItems.bind(this);
    this.posts = this.posts.bind(this);
  }

  // post(){
  //   return this.state.data.map(item =>{
  //     return <div key={item._id}>
  //        <Post 
  //        key={item._id}
  //        id={item._id}
  //        title={item.title}
  //        description={item.description}
  //        upvotes={item.upvotes}
  //        website={item.redirect_url}
  //        date={item._created}
  //        img={item.img}
  //        />
  //     </div> 
  //   })
  // }

  handleClick(post) {
    console.log('Click happened', post);
    const url_temp_prefix = 'https://cors-anywhere.herokuapp.com/';
    const url = `${url_temp_prefix}https://phclone-24db.restdb.io/rest/posts/${post._id}`;
    const currentUpvotes = post.upvotes;
    const newUpvotes = currentUpvotes + 1;

    var jsondata = { 'upvotes': newUpvotes };

    console.log('CurrentVotes', currentUpvotes);
    console.log('new json', jsondata);

    var settings = {
      "async": true,
      "crossDomain": true,
      "headers": {
        "content-type": "application/json",
        "x-apikey": "ce3aeba14a46f6ed8d4183a4af9c099299d75",
        "cache-control": "no-cache"
      },
      "processData": false,
    }
    axios.put(url, jsondata, settings)
      .then(response => {
        console.log('request response', response.data);

        this.setState({ data: [response.data] });

      })
      .catch(error => {
        console.log('error', error);
      });
  }

  posts(post) {
    console.log('state data', this.state.data);
    return this.state.data.map((post) => {
      console.log('post', post)
      const url = 'https://phclone-24db.restdb.io/media';
      return <div key={post._id} >
        <ul>
            <li className="one-item-container">
              <div className="post-img-wrapper">
                <a href={post.website}>
                  <img src={url+'/'+post.img} alt="image" />
                </a>
                </div>
                <div className="post-text-wrapper">
                  <h2>{post.title}</h2>
                  <h4>{post.description}</h4>
                  <div className="post-url-wrapper">
                    <a href={post.website} target="_blank">website</a>
                  </div>

                </div>

                <div className="post-btn-wrapper">
                  <button className="upvote-count"> {post.upvotes == 'undefined' ? 0 : post.upvotes} </button>
                  <button className="btn-Upvote" id="up" key={post} onClick={() => this.handleClick(post)}> upvote </button>
                  {/* <h5>{post._created}</h5> */}
                </div>

              </li>
            

          </ul>
          </div>
        });
      }

  getDBItems() {
    const url_temp_prefix = 'https://cors-anywhere.herokuapp.com/';
    const url = `${url_temp_prefix}https://phclone-24db.restdb.io/rest/posts?q={}&h={%22$orderby%22:%20{%22_created%22:%20-1}}`;    
    const data = {
          "async": true,
        "crossDomain": true,
      "headers": {
          "content-type": "application/json",
        "x-apikey": "ce3aeba14a46f6ed8d4183a4af9c099299d75",
        "cache-control": "no-cache"
      }
    };

    axios.get(url, data)
      .then(response => {
          console.log('respons', response.data);
        this.setState({data: response.data });
      })
      .catch(error => {
          console.log('error', error);
        });
    }
  
  componentDidMount() {
          this.getDBItems();
        }
      
  render() {
    return (
      <div >
          <div>
            <div className="heading">RECENT POSTS</div>
            <div>
              {this.state.data != null ? this.posts() : 'Loading'}
            </div>
          </div>
        </div>
        )}
    }
    export default DBItemsContainer2;
