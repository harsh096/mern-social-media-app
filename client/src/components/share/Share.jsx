import "./share.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import LabelIcon from "@mui/icons-material/Label";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Share() {
  return (
    <div className="shareContainer">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src="/assets/profile_pictures/1.jpg"
            alt=""
            className="shareProfileImg"
          />
          <input
            type="text"
            placeholder="Whats on your mind Jessica?"
            className="shareInput"
          
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <PermMediaIcon htmlColor="tomato" className="shareIcon" />
            <span className="shareOptionText">Photo or Video</span>
          </div>
          <div className="shareOptions">
            <LabelIcon htmlColor="blue" className="shareIcon" />
            <span className="shareOptionText">Tag</span>
          </div>
          <div className="shareOptions">
            <LocationOnIcon htmlColor="green" className="shareIcon" />
            <span className="shareOptionText">Location</span>
          </div>
          <div className="shareOptions">
            <EmojiEmotionsIcon htmlColor="goldenrod" className="shareIcon" />
            <span className="shareOptionText">Feelings</span>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
