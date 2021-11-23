import "./profile.css";

import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profileContainer">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="/assets/cover.jpg"
                alt=""
                className="profileCoverImage"
              />
              <img
                src="/assets/profile_pictures/1.jpg"
                alt=""
                className="profileUserImage"
              />
            </div>
            <div className="profileInfo">
              <h3 className="profileName">Jessica Si</h3>
              <span className="profileDesc">Hello Everyone!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}
