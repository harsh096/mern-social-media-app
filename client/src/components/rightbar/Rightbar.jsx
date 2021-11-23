import "./rightbar.css";
import OnlineFriend from "../OnlineFriend/OnlineFriend";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="rightbarBirthdayContainer">
          <img
            src="/assets/icons/gift.png"
            alt=""
            className="rightbarBirthdayIcon"
          />
          <span className="rightbarBirthdayText">
            <b>Paula</b> and <b>3 other friends</b> have their birthdays today.
          </span>
        </div>

        <img src="/assets/ad.jpg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendsList">
          <OnlineFriend />
          <OnlineFriend />
          <OnlineFriend />
          <OnlineFriend />
          <OnlineFriend />
          <OnlineFriend />
          <OnlineFriend />
          <OnlineFriend />
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h3 className="rightbarTitle">User Information</h3>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City: </span>
            <span className="rightbarInfoValue">Ottawa, ON</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From: </span>
            <span className="rightbarInfoValue">India</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship: </span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h3 className="rightbarTitle">User Friends</h3>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/profile_pictures/2.jpg"
              alt=""
              className="rightbarUserFriend"
            />
            <span className="rightbarUserFriendName">Jenny</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/profile_pictures/3.jpg"
              alt=""
              className="rightbarUserFriend"
            />
            <span className="rightbarUserFriendName">Jenny</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/profile_pictures/4.jpg"
              alt=""
              className="rightbarUserFriend"
            />
            <span className="rightbarUserFriendName">Jenny</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/profile_pictures/5.jpg"
              alt=""
              className="rightbarUserFriend"
            />
            <span className="rightbarUserFriendName">Jenny</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/profile_pictures/6.jpg"
              alt=""
              className="rightbarUserFriend"
            />
            <span className="rightbarUserFriendName">Jenny</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/profile_pictures/1.jpg"
              alt=""
              className="rightbarUserFriend"
            />
            <span className="rightbarUserFriendName">Jenny</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbarContainer">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
