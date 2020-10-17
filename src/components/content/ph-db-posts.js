import React, { Component } from "react";
import axios from "axios";

import Post from "./post";


export default class DBItemsContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Posts",
      isLoading: false
    };

    this.handleFilter = this.handleFilter.bind(this);
    this.Post = this.Post.bind(this);
  }

  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter(item => {
        return item.name === filter;
      })
    });
  }

  getDBItems() {
    const validToken = 'ce3aeba14a46f6ed8d4183a4af9c099299d75';
    let config = {
      headers: {
        "content-type": "application/json",
        "x-apikey": validToken,
        "cache-control": "no-cache"
      }
    }

    let data_ = {
      headers: {
        "content-type": "application/json",
        "x-apikey": validToken,
        "cache-control": "no-cache",
        "Access-Control-Allow-Origin": "*"
      }
    };
    axios
      .get("https://cors-anywhere.herokuapp.com/https://phclone-24db.restdb.io/rest/posts",
        data_
      )
      .then(response => {
        console.log("response data", response);
        this.setState({
          data: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }


  Post() {
    console.log('Post', this.state)
    return this.state.data.map(item => {
      // return <div>
      //   {item.title} //see response items
      // </div>
      return <Post
        key={item._id}
        id={item._id}
        title={item.title}
        description={item.description}
        upvotes={item.upvotes}
        website={item.redirect_url}
        date={item._created}
        img={item.img}
      />;

    })
  }

  componentDidMount() {
    this.getDBItems();
  }

  render() {
    console.log('Render', this.state);
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (

      <div  className="items-container">
        <div className="items-container-right">
        <div className="heading">RECENT POSTS</div>
          {this.state.data != null ? this.Post() : 'Loading'}
        </div>
      </div>

    );
  }
}