import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { findByLabelText } from '@testing-library/dom';

function App() {
  return (
    <div className="App">
      <DisplayPost></DisplayPost>
      <PostLoader></PostLoader>
      
    </div>
  );
}
function DisplayPost(){
  const myStyle = {
    backgroundColor: "cadetblue",
    color: "white",
    padding: "5px",
    border: "2px solid coral",
    borderRadius: "10px",
    width: "1080px",
    margin: "0px auto"
  };
  return (
    <div style ={myStyle}>
      <h1>
        Welcome to React Practice Session!
      </h1>
    </div>
  );
}
function PostLoader(){
  const [posts,setPosts] = useState([]);
  useEffect( ()=> {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => setPosts(data))
  },[])
  return (
    <div>
      <h3>
        Posts are loading! All datas are loaded from <a href="https://jsonplaceholder.typicode.com/posts" style={{textDecoration:"none"}}>Json Placeholder</a>
      </h3>
      <div style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)"}}>
      {
        posts.map(post => 
        <SharingPost userId={post.userId} postId = {post.id} postTitle={post.title} postBody={post.body}></SharingPost>
      )
      }
      </div>
    </div>
  );
}
function SharingPost(props){
  const myStyle = {
    backgroundColor: "beige",
    color: "",
    padding: "15px",
    border: "2px solid lightgreen",
    borderRadius: "10px",
    margin: "20px auto",
    width: "512px"
  };
  // console.log(props.userId,props.postId,props.title);
  return(
    <div style = {myStyle}>
      <h3>UserId: {props.userId}</h3>
      <h3>PostId: {props.postId}</h3>
      <h2>Title: {props.postTitle}</h2>
      <hr />
      <p>{props.postBody}</p>
    </div>
    
  );
}
export default App;
