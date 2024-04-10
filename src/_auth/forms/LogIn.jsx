import React, { useState } from "react";
import axios from "../../services/api";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { FaEyeSlash, FaUser } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { PiLockFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";

const LogIn = ({ handleAccount, haveAccount }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleFormInput = (e) => {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    try {
      axios
        .post("/auth/login/user", {
          user_email: credentials.email,
          user_password: credentials.password,
        })
        .then((response) => {
          console.log(response);

          localStorage.setItem("email", credentials.email);
          localStorage.setItem("name", response.data.user_name);
          localStorage.setItem("userId", response.data.userId);
          navigate(location.state?.from || "/");
          window.scrollTo(0, 0);
        });
    } catch (err) {
      console.log("Err signing up", err);
    }
  };

  return (
    <div className="w-full max-w-[423px] border-[1px] border-grey-300 mx-auto mt-28 p-3 rounded-xl relative">
      <h1 className="text-2xl font-medium mt-10 text-center text-grey-600 ">
        Log in
      </h1>
      <div id="auth-section">
        <form id="auth-form" onSubmit={(e) => handleFormSubmit(e)}>
          <div>
            <MdEmail />
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={(e) => handleFormInput(e)}
              placeholder="Email"
              required
            />
          </div>
          <div>
            <div className="flex items-center">
              <PiLockFill />
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={(e) => handleFormInput(e)}
                placeholder="Password"
                required
              />
            </div>
            <FaEyeSlash />
          </div>

          <Link
            to={"/forgot-password"}
            className="w-full text-end text-sm font-normal text-primary-500"
          >
            Forgot Password?
          </Link>
          <button className="submit-button" type="submit">
            Login
          </button>
          <p className="text-sm font-normal">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary-500 cursor-pointer">
              {" "}
              Sign Up{" "}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
