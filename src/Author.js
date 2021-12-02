
import './App.css';
import React, { Component } from 'react';
class Author extends Component{
  render(){
    return(
      <li>{this.props.body}</li>
    )
  }

}


export default Author;
