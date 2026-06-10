import { useState } from "react";

function LikeDislike() {
  var [likes, setLikes] = useState(0);
  var [dislikes, setDislikes] = useState(0);
  return (
    <div className="mybox">
      <h3>Likes:{likes}</h3>
      <h3>Disikes:{dislikes}</h3>
      <button
        onClick={() => {
          setLikes(likes + 1);
        }}
      >
        Like
      </button>
      <button
        onClick={() => {
          setDislikes(dislikes + 1);
        }}
      >
        DisLike
      </button>
    </div>
  );
}

export default LikeDislike;
