import './App.css';
import React, { Component } from 'react';
import Comment from './Comment.js';
import Author from './Author.js';
import About from './About';

class Post extends Component{

  state = {
    title :"Cool dinosaurs",
    authors : ["Me","Person", "Other Person"],
    body: "Check out our cool collection!",
    comments: ["Cool collection", "Stego", "Makes me wonder what's for dinner tonight"],
  }

  changeBody = () =>{
    let newBody = prompt("Insert new body here!")
    this.setState({body: newBody})
  }

render(){

let allAuthors = this.props.authors.map((author,index) => 
  <Author body={author} key = {index} />
)

let allComments = this.props.comments.map((comment,index) => 
<Comment comments={comment} key = {index} />
)

console.log(allComments);

return(
  <div>
  <h1>{this.props.title}</h1>
  <p>Written by:</p>
  <ul>
    {allAuthors}
  </ul>
  <p>{this.state.body}</p>

  <p>Change the body here!</p>
  <button type="button" onClick= {this.changeBody}>Update Body</button>


  <br></br>
  <h2>Comments</h2>
  <ul>
    {allComments}
  </ul>

  <About/>

  </div>

)

  }
}

export default Post;
