import React, { Component } from "react";
import axios from "axios";

import OneItem from "./one-item";


export default class ItemsContainer extends Component {
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

  getPHItems () {
    const validToken = '9X8KyWAJJY1GLB9zt0JVtXfIOUwZEoA1nCH3NoEexgQ';
    let config = {
      headers: {
        'Authorization': 'Bearer ' + validToken
      }
    }
    axios
    // .get("https://itunes.apple.com/search?term=beyonce&entity=musicVideo")
    .get("https://api.producthunt.com/v1/posts/all?sort_by=votes_count&order=desc&search[featured_month]=5&search[featured_year]=2020",
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


  OneItem() {
    return this.state.data.map(item => {
      return <OneItem 
      title={item.name} 
      description={item.tagline} 
      url={item.discussion_url} 
      created_at={item.created_at} 
      date={item.day} 
      img={item.thumbnail.image_url} 
      comments={item.comments_count} 
      upvotes={item.votes_count}  
      website={item.redirect_url} 
      user={ItemsContainer.user}
      key={item.id} 
      slug={item.slug} />;
    });
  }

  componentDidMount() {
    this.getPHItems();
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

  return (
    <div className="items-container">
      <h1>Features posts this mounth</h1>
      {/* <h2>{this.state.pageTitle}</h2> */}
      {this.OneItem()}
    </div>
  );
}
}
