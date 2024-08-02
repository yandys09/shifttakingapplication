import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <Navbar />
      <div className="login-container">
        <form action="">
          <h2>Login</h2>
          <label htmlFor="">Staff ID</label>
          <div className="password">
            <input type="text" id="staffID" name="staffID" />
          </div>
          <label htmlFor="password" className="">
            Password: {"   "}
            <span
              onClick={handleTogglePassword}
              style={{
                display: "inline",
                cursor: "pointer",
                fontSize: "20px",
                padding: "8px",
              }}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </label>
          <div className="password">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
            />
          </div>
          <span className="login-btn">Login</span>
          <Link to="/forgot-password">
             <span className="forgot-password">Forgot Password</span>
          </Link>
         
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
