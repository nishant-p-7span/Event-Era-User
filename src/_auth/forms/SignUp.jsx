import  { useState } from "react";
import axios from "../../services/api";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { PiLockFill } from "react-icons/pi";
import { FaEyeSlash } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const SignUp = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    userName: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const [error, setError] = useState(""); // State for error message

  const handleFormInput = (e) => {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (credentials.password !== credentials.cpassword) {
      setError("Password and Confirm Password do not match.");
      return;
    }
    if (credentials.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    try {
      const response = await axios.post("/auth/register", {
        user_name: credentials.userName,
        user_email: credentials.email,
        user_password: credentials.password,
        isuservendor: false,
      });
      localStorage.setItem("email", credentials.email);
      localStorage.setItem("personId", response.data.userId);
      navigate(location.state?.from || "/");
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="w-full max-w-[423px] border-[1px] border-grey-300 mx-auto mt-28 p-3 rounded-xl relative">
      <h1 className="text-2xl font-medium mt-10 text-center text-grey-600 ">
        Sign Up
      </h1>
      <div id="auth-section">
        <form id="auth-form" onSubmit={(e) => handleFormSubmit(e)}>
          <div className="input-username">
            <FaUser />
            <input
              type="text"
              name="userName"
              value={credentials.userName}
              onChange={(e) => handleFormInput(e)}
              placeholder="Name"
              required
            />
          </div>
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
            {/* <FaEyeSlash /> */}
          </div>
          <div>
            <div className="flex items-center">
              <PiLockFill />
              <input
                type="password"
                name="cpassword"
                value={credentials.cpassword}
                onChange={(e) => handleFormInput(e)}
                placeholder="Confirm password"
                required
              />
            </div>
            {/* <FaEyeSlash /> */}
          </div>
          {error && <p className="text-red-500 text-sm font-normal">{error}</p>} {/* Display error message */}
          <button className="submit-button" type="submit">
            Sign Up
          </button>
          <p className="text-sm font-normal">
            Already have an account?{" "}
            <Link to="/login" className="text-primary-500 cursor-pointer">
              {" "}
              Login{" "}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
