import { Link } from 'react-router-dom'
import './register.css'

function Register() {
  return (
    <div className="outer1">
      <div className="login1">
        <div className="left1">
          <h1>Hashmedia</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
            provident dolore magnam reiciendis laudantium et quidem dolor!
            Minima.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/login">
          <button>Login</button>
          </Link>
        </div>
        <div className="right1">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" className="user1"></input>
            <input type="text" placeholder="Email" className="email1"></input>
            <input type="password" placeholder="Password" className="pass1"></input>
            <input type="password" placeholder="Confirm Password" className="conpass1"></input>
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register