import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './App';

var blogpost ={
  title :"Cool dinosaurs",
  authors : ["Me","Person", "Other Person"],
  body: "Check out our cool collection!",
  comments: ["Cool collection", "Stego", "Makes me wonder what's for dinner tonight"],
}

ReactDOM.render(
  <Post 
  title = {blogpost.title}
  authors = {blogpost.authors}
  body = {blogpost.body}
  comments = {blogpost.comments}
   />,

  document.getElementById('root')
);
