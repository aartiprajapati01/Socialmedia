import { useState } from "react";

function PostCard({ post }) {
  const [likes, setLikes] = useState(0);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  return (
    <div className="card">
      <p>{post}</p>

      <button className="btn like" onClick={() => setLikes(likes + 1)}>
        ❤️ {likes}
      </button>

      <button className="btn share" onClick={() => alert("Shared!")}>
        🔁 Share
      </button>

      <div>
        <input
          placeholder="Write comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          className="btn comment"
          onClick={() => {
            setComments([...comments, comment]);
            setComment("");
          }}
        >
          Comment
        </button>
      </div>

      {comments.map((c, i) => (
        <p key={i}>💬 {c}</p>
      ))}
    </div>
  );
}

export default PostCard;