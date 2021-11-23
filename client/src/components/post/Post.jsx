import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";

export default function Post() {
  const [likes, setLikes] = useState(10);
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="postContainer">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="/assets/profile_pictures/1.jpg"
              alt=""
              className="postProfileImage"
            />
            <span className="postTopName">Jessica Si</span>
            <span className="postTopDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon className="postTopMoreIcon" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey..its my first post</span>
          <img
            src="/assets/profile_pictures/1.jpg"
            alt=""
            className="postImage"
          />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src="/assets/icons/like.png"
              onClick={handleLikeClick}
              alt=""
              className="postLikeIcon"
            />
            <img
              src="/assets/icons/heart.png"
              alt=""
              className="postLikeIcon"
              onClick={handleLikeClick}
            />
            <span className="postLikesCounter">{likes} people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postComment">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
