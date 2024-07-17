import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
function Login() {
  const {login} = useContext(AuthContext);
  const HandleLogin = () =>{
    login();
  }
  return (
    <div className="outer">
      <div className="login">
        <div className="left">
          <h1>Hashmedia</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
            provident dolore magnam reiciendis laudantium et quidem dolor!
            Minima.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
          <button>Register</button>
          </Link>
          
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" className="user"></input>
            <input type="password" placeholder="Password" className="pass"></input>
            <button onClick={HandleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
