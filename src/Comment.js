import './App.css';
import React, { Component } from 'react';
class Comment extends Component{
  render(){
    return(
      <li>{this.props.comments}</li>
    )
  }
}


export default Comment;
