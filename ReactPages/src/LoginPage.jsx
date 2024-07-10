// import React, { useState } from "react";
// import "./Kw.css"
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();

//   const handleLogin = () => {
//     if (username === "Harsh@123" && password === "password") {
//       navigate("/Sirdashboard");
//     } else {
//       alert("Invalid username or password");
//     }
//   };

//   const handleSignupClick = () => {
//     navigate("/Signup");
//   };
//     return(
//         <div className="wrapper">
//       <form method="post" onSubmit={handleLogin}>
//         <h2>Login</h2>
//         <div className="input-field">
//           <label htmlFor="username">username</label>
//           <input 
//           type="text" 
//           name="username" 
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required />
//         </div>
//         <div className="input-field">
//           <label htmlFor="password">Password</label>
//           <input 
//           type="password" 
//           name="password" 
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required />
//         </div>
//         <div className="forget">
//           <label htmlFor="remember">
//             <input type="checkbox" id="remember" />
//             <p>Remember me</p>
//           </label>
//           <a href="#">Forgot password?</a>
//         </div>
//         <input type="submit" value="Submit" />
//         <div className="register">
//           <p>Don't have an account?{" "}
//             <a href="#" onClick={handleSignupClick}>Signup</a>
//           </p>
//         </div>
//       </form>
//     </div>
//     )
// } 


import React, { useState } from "react";
import "./Kw.css"; // Ensure the correct path to your CSS file
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (username === "Harsh@123" && password === "password") {
      navigate("/Dashboard");
    } else {
      alert("Invalid username or password");
    }
  };

  const handleSignupClick = () => {
    navigate("/Signup");
  };

  return (
    <div className="wrapper">
      <form method="post" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="input-field">
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="username">Username</label>
        </div>
        <div className="input-field">
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="password">Password</label>
        </div>
        <div className="forget">
          <label htmlFor="remember">
            <input type="checkbox" id="remember" />
            <p>Remember me</p>
          </label>
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit">Submit</button>
        <div className="register">
          <p>
            Don't have an account?{" "}
            <a href="#" onClick={handleSignupClick}>
              Signup
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
