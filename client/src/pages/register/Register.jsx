import "./register.css";

export default function Register() {
  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social</h3>
          <span className="loginDesc">
            Connect with your friends and the world around you on <b>Social</b>
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" type="text" className="loginInput" />
            <input placeholder="Email" type="text" className="loginInput" />
            <input placeholder="Password" type="text" className="loginInput" />
            <input placeholder="Confirm Password" type="text" className="loginInput" />
            <button className="loginButton">Sign Up</button>
            
            <button className="createAccount">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
