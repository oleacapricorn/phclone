import React, { Component } from "react";
import axios from "axios";


class DBItemsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    this.handleClick = this.handleClick.bind(this);
    this.getDBItems = this.getDBItems.bind(this);
    this.post = this.post.bind(this);
  }

  post(item) {
    console.log('state data', this.state.data);
    return this.state.data.slice(0,5).map((item) => {
      console.log('item', item)
      const url = 'https://phclone-24db.restdb.io/media';
      return <div key={item._id}>
       <div>
      <ul>
        <li className="one-item-container">
        <div className="right-img-wrapper">
                <a href={item.website}>
                  <img src={url+'/'+item.img} alt="image" />
                </a>
                </div>
          <div className="post-text-wrapper">
            <div className="post-title">
              <h2>{item.title}</h2>
            </div>
            {/* <div>
            <h4>{item.description}</h4>
            </div> */}
           
          </div>
          <div className="post-title">
            <div className="post-btn-wrapper">
              <button className="upvote-count"> {item.upvotes == 'undefined' ? 0 : item.upvotes}  </button> 
              <button className="btn-Upvote"  key={item} onClick={() => this.handleClick(item)}> upvote </button>
            </div>
            <div className="post-url-wrapper">
              <a href={item.website} target="_blank">website</a>
            </div>
          </div>

        </li>
      </ul>
    </div>
        </div>

    })
  }

  handleClick(item) {
    console.log('Click happened', item);
    const url_temp_prefix = 'https://cors-anywhere.herokuapp.com/';
    const url = `${url_temp_prefix}https://phclone-24db.restdb.io/rest/posts/${item._id}`;
    const currentUpvotes = item.upvotes;
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
        this.setState({
          data: [response.data]
        }
        )
      })
      .catch(error => {
        console.log('error', error);
      });
  }

  componentDidMount() {
    this.handleClick();
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
        this.setState({data: response.data});
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
          {this.state.data != null ? this.post() : 'Loading'}

        </div>
      </div>
    );
  }
}

export default DBItemsContainer;

