import React from 'react'
import { useNavigate } from "react-router-dom";
import "./Kw.css"
export default function Signup() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/");
  };
  return (
    <div className="wrapper">
      <form method="post">
        <h2>SignUp</h2>
        <div className="input-field">
          <input type="text" name="name" required />
          <label htmlFor="name">username</label>
        </div>
        <div className="input-field">
          <input type="text" name="phone_no" required />
          <label htmlFor="phone_no">Phone_no</label>
        </div>
        <div className="input-field">
          <input type="email" name="email_id" required />
          <label htmlFor="email_id">Email_Id</label>
        </div>
        <div className="input-field">
          <input type="text" name="Age" required />
          <label htmlFor="Age">Age</label>
        </div>
        <div className="input-field">
          <input type="password" name="password" required />
          <label htmlFor="password">Password</label>
        </div>
        <div className="forget">
          <label htmlFor="remember">
            <input type="checkbox" id="remember" />
            <p>Remember me</p>
          </label>
          <a href="#">Forgot password?</a>
        </div>
        <input type="submit" value="Submit" />
        <div className="register">
        <p>
        Already have an account?{" "}
        <a href="#" onClick={handleLoginClick}>
          Login
        </a>
      </p>
        </div>
      </form>
    </div>
  )
}
