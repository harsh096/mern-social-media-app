import "./topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span>Social</span>
      </div>
      <div className="topbarCenter">
        <div className="topbarSearchContainer">
          <SearchIcon className="searchIcon"/>
          <input
            type="text"
            className="topbarSearchInput"
            placeholder="Search for friends or posts.."
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIconsContainer">
          <div className="topbarIcon">
            <PersonIcon />
            <span className="iconBadge">1</span>
          </div>
          <div className="topbarIcon">
            <ChatIcon />
            <span className="iconBadge">2</span>
          </div>
          <div className="topbarIcon">
            <NotificationsIcon />
            <span className="iconBadge">3</span>
          </div>
        </div>
        <img
          src="\assets\profile_pictures\1.jpg"
          alt=""
          className="topbarProfilePicture"
        />
      </div>
    </div>
  );
}
