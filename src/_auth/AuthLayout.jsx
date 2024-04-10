import Navbar from "../components/shared/Navbar";
import AuthBG from "./AuthBG";
import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <div className="w-full  h-[calc(100vh-109px)] ">
      <Navbar />
      <AuthBG />
      <Outlet />
    </div>
  );
};
export default Auth;
