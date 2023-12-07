import React from "react";
import "../styles/post.css";

export default function Post() {
  const staticPosts = [
    {
      post_id: 1,
      user_id: 1,
      description: "une belle toph",
      img: "https://cdn.pixabay.com/photo/2019/12/26/09/49/nature-4720090_1280.jpg",
    },
    {
      post_id: 2,
      user_id: 2,
      description: "waw its amazing ",
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    },
  ];

  return (
    <div className="post">
      <h1>Liste des Posts</h1>
      {staticPosts.map((post) => (
        <div key={post.post_id}>
          <p>User ID: {post.user_id}</p>
          <p>Description: {post.description}</p>
          {post.img && (
            <img
              src={post.img}
              alt={`Post ${post.post_id} - ${post.description}`}
            />
          )}
          <hr />
        </div>
      ))}
    </div>
  );
}
