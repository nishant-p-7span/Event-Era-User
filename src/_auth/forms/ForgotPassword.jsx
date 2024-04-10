import { useState } from "react";
import axios from "../../services/api";
import { useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { PiLockFill } from "react-icons/pi";
import { FaEyeSlash } from "react-icons/fa6";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newCPassword, setNewCPassword] = useState("");
  const [step, setStep] = useState(1); // Step 1: Request OTP

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      // Step 1: Request OTP
      const response = await axios.post("/auth/forgot-password", {
        user_email: email,
      });
      if (response.data.message === "OTP sent to your email") {
        setStep(2); // Move to Step 2: Verify OTP
      }
    } catch (error) {
      console.error("Error requesting OTP:", error);
    }
  };

  const handleOtpVerification = async (e) => {
    e.preventDefault();
    try {
      // Step 2: Verify OTP
      const response = await axios.post("/auth/verify-otp", {
        user_email: email,
        otp: parseInt(otp),
      });
      if (response.data.message === "OTP verified successfully") {
        setStep(3); // Move to Step 3: Reset Password
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    if (newPassword !== newCPassword) {
      console.error("Password and Confirm Password do not match.");
      return;
    }
    try {
      // Step 3: Reset Password
      await axios.post("/auth/reset-password", {
        user_email: email,
        new_password: newPassword,
      });
      // Redirect to login page or homepage
      navigate("/login");
    } catch (error) {
      console.error("Error resetting password:", error);
    }
  };

  return (
    <div className="mt-28 ">
      <h1 className="text-2xl font-medium mb-10 text-center text-grey-600 ">
        Forgot Password
      </h1>
      <div className="w-full max-w-[423px] border-[1px] border-grey-300 mx-auto  py-8 rounded-xl relative">
        {step === 1 && (
          <div className="auth-section justify-center flex">
            <form id="auth-form" onSubmit={(e) => handleFormSubmit(e)}>
              <div>
                <MdEmail />
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email"
                  required
                />
              </div>
              <button type="submit" className="submit-button  text-nowrap">
                Confirm
              </button>
            </form>
          </div>
        )}
        {step === 2 && (
          <div className="auth-section justify-center flex">
            <form id="auth-form" onSubmit={(e) => handleOtpVerification(e)}>
              <div>
                <MdEmail />
                <input
                  type="text"
                  name="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                  required
                />
              </div>

              <button type="submit" className="submit-button  text-nowrap">
                Verify OTP
              </button>
            </form>
          </div>
        )}
        {step === 3 && (
          <div className="auth-section justify-center flex">
            <form id="auth-form" onSubmit={(e) => handlePasswordReset(e)}>
              <div>
                <div className="flex items-center">
                  <PiLockFill />
                  <input
                    type="password"
                    name="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Password"
                    required
                  />
                </div>
                <FaEyeSlash />
              </div>
              <div>
                <div className="flex items-center">
                  <PiLockFill />
                  <input
                    type="password"
                    name="cpassword"
                    value={newCPassword}
                    onChange={(e) => setNewCPassword(e.target.value)}
                    placeholder="Confirm password"
                    required
                  />
                </div>
                <FaEyeSlash />
              </div>
              <button type="submit" className="submit-button  text-nowrap">
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
