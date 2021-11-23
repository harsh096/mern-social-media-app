import "./login.css";

export default function Login() {
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
                <input placeholder="Email" type="text" className="loginInput"/>
                <input placeholder="Password" type="text" className="loginInput"/>
            <button className="loginButton">Login</button>
            <span className="loginForgotText">Forgot Password ?</span>
            <button className="createAccount">Create a new account</button>
            </div>
        </div>
      </div>
    </div>
  );
}
