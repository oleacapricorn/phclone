import React, { Component } from "react";
import axios from "axios";

import Post from "./post";


export default class DBItemsContainer extends Component {
  constructor() {
    super();

    this.state = {
    pageTitle: "Featured",
    isLoading: false,
    data: []
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter(item => {
        return item.name === filter;
      })
    });
  }

  getDBItems () {
    const validToken = 'ce3aeba14a46f6ed8d4183a4af9c099299d75';
    let config = {
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + validToken
      }
    }
    axios
    .get("https://phclone-24db.restdb.io/rest/posts",
    config
    )
    .then(response => {
      console.log("response data", response);
      this.setState({
        data: response.data.posts
      });
    })
    .catch(error => {
      console.log(error);
    });
  }


  Post() {
    return this.state.data.map(item => {
      return <Post
      title={item.name} 
      description={item.tagline} 
      url={item.discussion_url} 
      date={item.day} 
      img={item.thumbnail.image_url} 
      upvotes={item.votes_count}  
      website={item.redirect_url} 
      user={ItemsContainer.user}
      key={item.id} 
      slug={item.slug} />;
    });
  }

  componentDidMount() {
    this.getDBItems();
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

  return (
    <div className="items-container">
      <h1>Features posts this mounth</h1>
      {/* <h2>{this.state.pageTitle}</h2> */}
      {this.Post()}
    </div>
  );
}
}