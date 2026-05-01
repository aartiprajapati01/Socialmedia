import { useState } from "react";

function CreatePost({ addPost, friendCount }) {
  const [text, setText] = useState("");

  const canPost = () => {
    if (friendCount === 0) return false;
    if (friendCount === 1) return true;
    if (friendCount === 2) return true;
    if (friendCount > 10) return true;
    return true;
  };

  const handlePost = () => {
    if (!canPost()) {
      alert("Add friends to post!");
      return;
    }
    addPost(text);
    setText("");
  };

  return (
    <div className="card">
      <h3>Create Post</h3>
      <input
        placeholder="What's on your mind?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="btn share" onClick={handlePost}>
        Post
      </button>
    </div>
  );
}

export default CreatePost;