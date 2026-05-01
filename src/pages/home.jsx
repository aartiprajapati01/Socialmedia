import { useState } from "react";
import CreatePost from "../components/CreatePost";
import PostCard from "../components/PostCard";

function Home() {
  const [posts, setPosts] = useState([]);
  const [friendCount] = useState(2); // change this to test logic

  const addPost = (text) => {
    setPosts([text, ...posts]);
  };

  return (
    <div className="container">
      <CreatePost addPost={addPost} friendCount={friendCount} />

      {posts.map((p, i) => (
        <PostCard key={i} post={p} />
      ))}
    </div>
  );
}

export default Home;