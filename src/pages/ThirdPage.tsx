import React, { useState } from 'react';


const TodoPost = () => {
  const [post, setPost] = useState('');
  const [submittedPost, setSubmittedPost] = useState('');

  const handlePostSubmit = () => {
    setSubmittedPost(post)
    setPost("")
  };

  return (
    <div className="postDivcontainer">
      <div className="createPostDiv">
        <input value={post}  onChange={(e) => setPost(e.target.value)}   />
       
       <button onClick={handlePostSubmit} >POST</button>
        
      </div>
      <div className="postPlace">
        <h1>{submittedPost}</h1>
      </div>
    </div>
  );
};

export default TodoPost;