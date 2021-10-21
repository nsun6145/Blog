import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './App';

var blogpost ={
  title :"Cool dinosaurs",
  author : "Me",
  body: "Check out our cool collection!",
  comments: ["Cool collection", "Stego", "Makes me wonder what's for dinner tonight"]
}

ReactDOM.render(
  <Post 
  title = {blogpost.title}
  author = {blogpost.author}
  body = {blogpost.body}
  comments = {blogpost.comments[0]}
   />,

  document.getElementById('root')
);
