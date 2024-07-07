import { addDoc, collection } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import Markdown from "react-markdown";
function CreatePost({ isAuth }) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  });

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create A Post</h1>
        <div className="inputGp">
          <label>Title :</label>
          <input
            placeholder="Title..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div>
          <div className="inputGp">
            <label>Edit :</label>
            <textarea
              placeholder="Post..."
              onChange={(event) => {
                setPostText(event.target.value);
              }}
            ></textarea>
          </div>
          <div className="inputGp">
            <label>Preview :</label>
            <div>
              <h1 className="title">
                <Markdown>{title}</Markdown>
              </h1>
              <pre className="postText">
                <Markdown>{postText}</Markdown>
              </pre>
              <h3>@{auth.currentUser.displayName}</h3>
            </div>
          </div>
        </div>
        <button onClick={createPost}>Submit Post</button>
      </div>
    </div>
  );
}

export default CreatePost;
