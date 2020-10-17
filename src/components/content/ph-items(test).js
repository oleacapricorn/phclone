import React, { Component } from "react";
import axios from "axios";

import Post from "./post2";


class DBItemsContainer2 extends Component {
  constructor(){
    super();
    this.state = {
      pageTitle: "Posts"
    }
    
    this.getDBItems = this.getDBItems.bind(this);
    this.post = this.post.bind(this);
  }

  getDBItems() {
 const url_temp_prefix = 'https://cors-anywhere.herokuapp.com/';
        const url = `${url_temp_prefix}phclone-24db.restdb.io/rest/posts`; 

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

    post(){
      return this.state.data.map(item =>{
        return <div key={item._id}>
           <Post
           key={item._id}
           id={item._id}
           title={item.title}
           description={item.description}
           upvotes={item.upvotes}
           website={item.redirect_url}
           date={item._created}
           img={item.img}
           />
        </div> 
      })
    }
  
    componentDidMount() {
      this.getDBItems();
    }

    render() {
    return (
      <div >
        <div>        
          <div className="heading">RECENT POSTS</div>
          <div className="db-post-list">
          {this.state.data != null ? this.post() : 'Loading'}
          </div>
        </div>
        </div>

    );
  }
}
export default DBItemsContainer2;