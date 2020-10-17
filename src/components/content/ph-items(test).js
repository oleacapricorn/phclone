import React, { Component } from "react";
import axios from "axios";


class DBItemsContainer2 extends Component {
  constructor(props){
    super(props);
    this.state = {
      pageTitle: "Posts",
      item: [] 
    }
    this.likeHendler = this.likeHendler.bind(this);
    this.getDBItems = this.getDBItems.bind(this);
    this.post = this.post.bind(this);
  }

  post(){
    return this.state.data.map(item => 
       <div key={item._id} className="db-post-list">
        
<div>
      <ul>
        <div className="test">
          <li className="second-item-container">
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

            <div className="post-btn-wrapper">
            <button className="upvote-count"> {item.upvotes == 'undefined' ? 0 : item.upvotes} </button> 
            <button className="btn-Upvote" item={item._id} onClick={() => this.likeHendler(item)} > upvote </button>

            </div>

          </li>
        </div>

      </ul>
    </div>
      </div> 
     )};
  


  likeHendler(item){
    console.log('Click happened', item);
    const url_temp_prefix = 'https://cors-anywhere.herokuapp.com/';
    const url = `${url_temp_prefix}https://phclone-24db.restdb.io/rest/posts/${item._id}`;
    const currentUpvotes = item.upvotes;
    const newUpvotes = currentUpvotes + 1;

    var jsondata = {'upvotes': newUpvotes };
   
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
    axios.put(url,jsondata,settings)
    .then(response => {
        console.log('request response',response.data);
        this.setState({
            data : response.data
        }
    )
      })
    .catch(error => {
        console.log('error',error);
    });
}

  getDBItems() {
 const url_temp_prefix = 'https://cors-anywhere.herokuapp.com/';
        const url = `${url_temp_prefix}https://phclone-24db.restdb.io/rest/posts`; 

        const data =   {
            "async": true,
            "crossDomain": true,
            "headers": {
            "content-type": "application/json",
            "x-apikey": "ce3aeba14a46f6ed8d4183a4af9c099299d75",
            "cache-control": "no-cache"
          }};
        
        axios.get(url,data)
        .then(response => {
            console.log('respons',response.data);
            this.setState({
                data : response.data
            }
        )
          })
        .catch(error => {
            console.log('error',error);
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
export default DBItemsContainer2;