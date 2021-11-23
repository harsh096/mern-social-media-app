import "./onlineFriend.css";

export default function OnlineFriend() {
  return (
    <li className="rightbarFriendListItem">
      <div className="rightbarImageContainer">
        <img
          src="/assets/profile_pictures/5.jpg"
          alt=""
          className="rightbarFriendImage"
        />
        <span className="rightbarFriendOnlineStatus"></span>
      </div>
      <span className="rightbarFriendName">John Doe</span>
    </li>
  );
}
